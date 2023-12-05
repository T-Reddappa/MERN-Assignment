import React, { useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { Routes, Route, Router, useNavigate } from "react-router-dom";

import Home from "./pages/home/homePage";
import { useDispatch } from "react-redux";
import { getAllUsers } from "./actions/userActions";
import TeamPage from "./pages/team/teamPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      <h1 onClick={() => navigate("/")}>User Hub</h1>
      <ToastContainer />
      {/* <UserSearch /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
