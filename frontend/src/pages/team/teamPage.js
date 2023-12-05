import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import UserCard from "../../components/userCard/userCard";

import "./teamPage.css";

const TeamPage = () => {
  const teams = useSelector((state) => state.teams.teams);
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Back To Home
      </Button>
      <h2>Teams</h2>
      <div className="teams-container">
        {teams.length >= 1 ? (
          teams?.map((team) => {
            return (
              <div>
                <h3>{team.teamName}</h3>
                {team.team?.map((user) => (
                  <UserCard user={user} showCheckbox={false} />
                ))}
              </div>
            );
          })
        ) : (
          <p>Create a team to view here</p>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
