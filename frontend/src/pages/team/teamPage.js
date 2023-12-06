import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import UserCard from "../../components/userCard/userCard";

import "./teamPage.css";
import { getAllTeams, getTeamById } from "../../actions/teamActions";

const TeamPage = () => {
  const allTeams = useSelector((state) => state.teams.allTeams);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.teams.team);

  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  const handleGetTeam = (teamId) => {
    dispatch(getTeamById(teamId));
  };

  return (
    <div>
      <Button variant="outlined" onClick={() => navigate("/")}>
        Back To Home
      </Button>
      <h2>Teams</h2>
      <div className="teams-container">
        {allTeams.length >= 1 ? (
          allTeams?.map((team) => {
            return (
              <div
                className="team-display"
                onClick={() => handleGetTeam(team._id)}
              >
                <h3>{team.teamName}</h3>
                <p>Total Members: {team.team.length}</p>
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
