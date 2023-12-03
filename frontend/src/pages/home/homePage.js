import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@mui/material";
import "./homePage.css";

import UserCard from "../../components/userCard/userCard";
import { getUsers } from "../../actions/userActions";

const Home = () => {
  const filteredUsers = useSelector((state) => state.users.filteredUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(currentPage, 20));
  }, [currentPage]);

  const handlePageChange = (e, newPage) => {
    setCurrentPage(newPage);
    console.log(e);
  };

  return (
    <div>
      <div className="users-container">
        {filteredUsers?.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
      <div className="pagination">
        <Pagination
          count={10}
          variant="outlined"
          color="primary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
