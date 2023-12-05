import React from "react";
import { useSelector } from "react-redux";

import "./teamPage.css";
const TeamPage = () => {
  const users = useSelector((state) => state.users.users);
  const domains = users?.map((user) => user.domain);
  const teams = useSelector((state) => state.teams.team);

  const usersByDomain = [...users].reduce((acc, user) => {
    const domain = user.domain;
    if (!acc[domain]) {
      acc[domain] = [];
    }

    acc[domain].push(user);
    return acc;
  }, {});

  const usersByDomainArray = Object.entries(usersByDomain)?.map(
    ([domain, users]) => ({ domain, users })
  );

  return (
    <div>
      <h2 onClick={() => console.log(teams)}>Create Team</h2>
      <div className="teams-container">
        {usersByDomainArray.map(({ domain, users }) => {
          return (
            <div>
              <h3>{domain}</h3>
              {users?.map((user) => (
                <div className="user-list-card">
                  {/* <img
                    className="user-list-avatar"
                    src={user.avatar}
                    alt="avatar"
                  />*/}
                  <p>
                    Name: {user.first_name} {user.last_name}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPage;
