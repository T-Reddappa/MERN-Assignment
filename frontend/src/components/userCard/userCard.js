// import React from "react";
import React, { useMemo } from "react";

import "./userCard.css";

const UserCard = ({ user, onUserSelect, showCheckbox = true, isChecked }) => {
  const { avatar, domain, available, first_name, last_name, gender, email } =
    user;
  const isUserSelected = useMemo(() => isChecked || false, [isChecked]);

  return (
    <div className="user-card">
      <div>
        <img src={avatar} alt="user-avatar" className="user-avatar" />
      </div>
      {showCheckbox && (
        <input
          type="checkbox"
          checked={isUserSelected}
          onChange={() => {
            onUserSelect(user);
          }}
        />
      )}

      <div className="user-info">
        <p onClick={() => console.log(isChecked)}>
          <strong>Name:</strong> {first_name} {last_name}
        </p>

        <p>
          <strong>Domain:</strong> {domain}
        </p>
        <p>
          <b>Gender</b>:{gender}
        </p>
        <p>
          <strong>Available:</strong> {available ? "Yes" : "No"}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
