import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Button } from "@mui/material";
import "./homePage.css";

import UserCard from "../../components/userCard/userCard";
import { getAllUsers, getUsers, searchUsers } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

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

  // useEffect(() => {
  //   const queryParams = new URLSearchParams({
  //     search,
  //     domain: domainFilter,
  //     gender: genderFilter,
  //     availability: availabilityFilter,
  //     page,
  //   });
  //   dispatch(searchUsers(queryParams));
  // }, [page]);

  const handlePageChange = (e, newPage) => {
    e.preventDefault();
    setPage(newPage);
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-container">
        <Button variant="contained" onClick={() => navigate("/teams")}>
          Create A Team
        </Button>
        <div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search users by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
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

        {paginatedUsers.length ? (
          <>
            <div className="users-container">
              {paginatedUsers?.map((user) => {
                return <UserCard key={user._id} user={user} />;
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
