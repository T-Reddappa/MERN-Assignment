import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from "../../actions/userActions";

const UserSearch = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const allDomains = users?.map((user) => user.domain);
  const domains = [...new Set(allDomains)];

  const [searchTerm, setSearchTerm] = useState("");
  const [domainFilter, setDomainFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState();

  useEffect(() => {
    const queryParams = {
      // page: 1, // Add pagination as needed
      // limit: 20,
      search: searchTerm,
      domain: domainFilter,
      gender: genderFilter,
      availability: availabilityFilter,
    };

    axios
      .get("https://userhub-yihb.onrender.com/api/users", {
        params: queryParams,
      })
      .then((response) => {
        dispatch({ type: "FILTER_USERS", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [searchTerm, domainFilter, genderFilter, availabilityFilter]);

  // useEffect(() => {
  // if (searchTerm.trim() === "") {
  // setFilteredUsers([]);
  // return;
  // }
  // dispatch(searchUsers(searchTerm));
  // axios
  //   .get(`http://localhost:8000/api/users?search=${searchTerm}`)
  //   .then((response) => {
  //     setFilteredUsers(response.data);
  //     console.log(response.data);
  //     dispatch({ type: "GET_USERS", payload: response.data });
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching users:", error);
  //   });
  // }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label>
        Domain:
        <select onChange={(e) => setDomainFilter(e.target.value)}>
          <option disabled>Select</option>
          {domains?.map((domain) => (
            <option value={domain}>{domain}</option>
          ))}
        </select>
      </label>

      <lable>
        Gender:
        <select onChange={(e) => setGenderFilter(e.target.value)}>
          <option disabled>Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Agender">Agender</option>
        </select>
      </lable>
      {/* <lable>
        Availability:
        <input type="checkbox" onChange={() => setAvailabilityFilter(true)} />
        Available
      </lable> */}
    </div>
  );
};

export default UserSearch;
