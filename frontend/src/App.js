import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/homePage";
import UserSearch from "./components/userSearch/userSearch";

function App() {
  return (
    <div className="App">
      <h1>User Hub</h1>
      <UserSearch />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
