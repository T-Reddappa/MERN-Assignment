const express = require("express");
const mongoose = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

const User = require("./model/userModel");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
} = require("./controllers/userControllers");

app.get("/", (req, res) => {
  res.send("Helivers Assignment - UsersHub");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

//API routes
app.get("/api/allUsers", getAllUsers);

app.get("/api/users", getUsers);

app.get("/api/users/:id", getUserById);

app.post("/api/users", createUser);

app.put("/api/users/:id", updateUser);

app.delete("/api/users/:id", deleteUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
