import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { searchUsers } from "../../actions/userActions";
import SearchAndFilter from "../../components/searchAndFilters/searchAndFilters";
import UserCard from "../../components/userCard/userCard";

import "./homePage.css";

const Home = () => {
  const filteredUsers = useSelector((state) => state.users.filteredUsers);
  const paginatedUsers = useSelector((state) => state.users.paginatedUsers);
  const pageCount = useSelector((state) => state.users.totalPages);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const allDomains = users?.map((user) => user.domain);
  const domains = [...new Set(allDomains)];
  const allGenders = users?.map((user) => user.gender);
  const genders = [...new Set(allGenders)];

  const [search, setSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams({
      search,
      domain: domainFilter,
      gender: genderFilter,
      availability: availabilityFilter,
      page,
    });

    dispatch(searchUsers(queryParams));
  }, [search, domainFilter, genderFilter, availabilityFilter, page]);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const selectedDomains = selectedUsers?.map((user) => user.domain);

  const isUserSelectable = (user) => {
    const isDomainUnique = !selectedUsers.some(
      (selectedUser) => selectedUser.domain === user.domain
    );

    return isDomainUnique;
  };

  const handleUserSelect = (user) => {
    if (!user.available) {
      return alert("Please select an available user.");
    }
    if (isUserSelectable(user)) {
      setSelectedUsers([...selectedUsers, user]);
    } else {
      alert(
        "Please select users with unique domains. Utilize filters for ease."
      );
    }
  };

  const handlePageChange = (e, newPage) => {
    e.preventDefault();
    setPage(newPage);
  };

  const handleCreateTeam = () => {
    console.log("selectedusers", selectedUsers);
    dispatch({ type: "CREATE_A_TEAM", payload: selectedUsers });
    setSelectedUsers([]);
  };

  return (
    <div>
      {selectedUsers.length > 0 ? (
        <ul className="selected-users-container">
          <h3>Current Team</h3>
          {selectedUsers?.map((user) => (
            <li key={user._id}>
              <img style={{ width: "20px" }} src={user.avatar} alt="avatar" />
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      <div className="home-container">
        <b className="team-creation-info">
          Select Users from different Domains to create a Team
        </b>
        <div className="action-buttons">
          {selectedDomains.length > 0 ? (
            <Button variant="contained" onClick={() => handleCreateTeam()}>
              Create A Team
            </Button>
          ) : (
            ""
          )}

          <Button variant="outlined" onClick={() => navigate("/teams")}>
            View Teams
          </Button>
        </div>

        <SearchAndFilter
          search={search}
          onSearchChange={setSearch}
          domains={domains}
          onDomainChange={setDomainFilter}
          genders={genders}
          onGenderChange={setGenderFilter}
          availability={availabilityFilter}
          onAvailabilityChange={setAvailabilityFilter}
        />
        {/* <div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search users by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filters">
            <label>
              Domain:
              <select onChange={(e) => setDomainFilter(e.target.value)}>
                <option value="">All</option>
                {domains?.map((domain) => (
                  <option value={domain} key={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </label>

            <lable>
              Gender:
              <select onChange={(e) => setGenderFilter(e.target.value)}>
                <option disabled>Select</option>
                <option value="">All</option>
                {genders?.map((gender) => (
                  <option value={gender}>{gender}</option>
                ))}
              </select>
            </lable>
            <lable>
              Availability:
              <select onChange={(e) => setAvailabilityFilter(e.target.value)}>
                <option value={""}>Any</option>
                <option value={"true"}>Yes</option>
                <option value={"false"}>No</option>
              </select>
            </lable>
          </div>
        </div> */}

        {selectedDomains.length > 0 ? (
          <div className="user-selection-info">
            <p>You have selected users in these domains:</p>
            <ul>
              {selectedDomains.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}

        {paginatedUsers.length ? (
          <>
            <div className="users-container">
              {paginatedUsers?.map((user) => {
                return (
                  <UserCard
                    key={user._id}
                    user={user}
                    onUserSelect={handleUserSelect}
                    isChecked={selectedUsers.includes(user)}
                  />
                );
              })}
            </div>

            <div className="pagination">
              <Pagination
                count={pageCount}
                variant="outlined"
                color="primary"
                page={page}
                onChange={handlePageChange}
              />
            </div>
          </>
        ) : (
          <h2>No users found with the required filters.</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
