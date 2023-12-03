// import React from "react";
import React from "react";
import "./userCard.css";

const UserCard = ({ user }) => {
  const {
    _id,
    avatar,
    domain,
    available,
    first_name,
    last_name,
    gender,
    email,
    id,
  } = user;

  return (
    <div className="user-card">
      <div>
        <img src={avatar} alt="user-avatar" className="user-avatar" />
      </div>
      <div className="user-info">
        <p>Id:{id}</p>
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
