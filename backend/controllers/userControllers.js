const express = require("express");

const User = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    console.log(createdUser);
    res
      .status(201)
      .json({ message: "User Created Successfully.", createdUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const filterUsersBySearchTerm = (users, searchTerm) => {
  if (!searchTerm) {
    return users;
  }

  const lowerCasedSearchTerm = searchTerm.toLowerCase();

  return users.filter(
    (user) =>
      user.last_name.toLowerCase().includes(lowerCasedSearchTerm) ||
      user.first_name.toLowerCase().includes(lowerCasedSearchTerm)
  );
};

const filterUsersByDomain = (users, domain) => {
  if (!domain) {
    return users;
  }

  return users.filter((user) => user.domain === domain);
};

const filterUsersByGender = (users, gender) => {
  if (!gender) {
    return users;
  }

  return users.filter((user) => user.gender === gender);
};

const filterUsersByAvailability = (users, availability) => {
  if (!availability) {
    return users;
  }

  return users.filter((user) => user.available === availability);
};

const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 200;
    const skip = (page - 1) * limit;
    const searchTerm = req.query.search;
    const domainFilter = req.query.domain;
    const genderFilter = req.query.gender;
    const availabilityFilter = req.query.availability;

    let allUsers = await User.find({}).skip(skip).limit(limit);

    // Apply filters sequentially
    allUsers = filterUsersBySearchTerm(allUsers, searchTerm);
    allUsers = filterUsersByDomain(allUsers, domainFilter);
    allUsers = filterUsersByGender(allUsers, genderFilter);
    allUsers = filterUsersByAvailability(allUsers, availabilityFilter);

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getUsers = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 200;
//     const skip = (page - 1) * limit;
//     const searchTerm = req.query.search;
//     const domainFilter = req.query.domain;
//     const genderFilter = req.query.gender;

//     const allUsers = await User.find({}).skip(skip).limit(limit);

//     if (searchTerm) {
//       console.log(searchTerm);
//       const filteredUsers = allUsers.filter(
//         (user) =>
//           user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       return res.status(200).json(filteredUsers);
//     }

//     if (domainFilter || genderFilter) {
//       const filteredUsers = allUsers.filter(
//         (user) => user.domain.toLowerCase() === domainFilter.toLowerCase()
//       );
//       return res.status(200).json(filteredUsers);
//     }

//     res.status(200).json(allUsers);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUserData = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedUserData,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User updated successfully.", updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User Deleted successfully.", deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser, getUserById };
