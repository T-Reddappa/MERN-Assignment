// import React from "react";
import React from "react";

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
  } = user;

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "20rem",
    margin: "16px",
    // display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    borderRadius: "50%",
    marginRight: "16px",
    border: "2px solid black",
  };

  const textStyle = {
    maxWidth: "300px",
  };

  return (
    <div className="user-card" style={cardStyle}>
      <div>
        <img src={avatar} alt="user-avatar" style={imageStyle} />
      </div>
      <div style={textStyle}>
        <p>
          <strong>Name:</strong> {first_name} {last_name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Domain:</strong> {domain}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

// const UserCard = ({ user }) => {
//   const {
//     _id,
//     avatar,
//     domain,
//     available,
//     first_name,
//     last_name,
//     gender,
//     email,
//   } = user;
//   return (
//     <div className="user-card">
//       <div>
//         <img src={avatar} alt="user-avatar" />
//       </div>
//       <div>
//         <p>
//           Name: {first_name} {last_name}
//         </p>
//         <p>Email: {email}</p>
//         <p>Domain: {domain}</p>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
