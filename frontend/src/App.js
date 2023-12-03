import React, { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/userCard";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://userhub-yihb.onrender.com/api/users"
        );
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <div>
        <h2>User Hub</h2>
      </div>
      {users?.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
}

export default App;
