import React, { useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { Routes, Route, Router } from "react-router-dom";

import Home from "./pages/home/homePage";
import UserSearch from "./components/userSearch/userSearch";
import { useDispatch } from "react-redux";
import { getAllUsers } from "./actions/userActions";
import TeamPage from "./pages/team/teamPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      <h1>User Hub</h1>
      {/* <UserSearch /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
