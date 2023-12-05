// import React from "react";
import React from "react";

import "./userCard.css";

const UserCard = ({ user, onUserSelect, showCheckbox = true }) => {
  const { avatar, domain, available, first_name, last_name, gender, email } =
    user;

  return (
    <div className="user-card">
      <div>
        <img src={avatar} alt="user-avatar" className="user-avatar" />
      </div>
      {showCheckbox && (
        <input
          type="checkbox"
          onChange={() => {
            onUserSelect(user);
          }}
        />
      )}

      <div className="user-info">
        <p>
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
