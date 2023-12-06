import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAllUsers } from "./actions/userActions";
import TeamPage from "./pages/team/teamPage";
import Home from "./pages/home/homePage";

import "./App.css";

function App() {
  const paginatedUsers = useSelector((state) => state.users.paginatedUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="App">
      <h1 onClick={() => navigate("/")} className="header">
        User Hub
      </h1>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
