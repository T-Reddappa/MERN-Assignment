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

const getAllUsers = async (req, res) => {
  try {
    const allusers = await User.find({});
    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  const { search, domain, gender, availability, page = 1 } = req.query;
  const PAGE_SIZE = 20;

  const allUsers = await User.find({});

  // Apply filters
  const filteredUsers = filterUsers(
    allUsers,
    search,
    domain,
    gender,
    availability
  );

  // Apply pagination
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const startIndex = Math.max((page - 1) * PAGE_SIZE, 0);
  const endIndex = Math.min(startIndex + PAGE_SIZE, totalItems);
  const paginatedUsers =
    filteredUsers.length >= PAGE_SIZE
      ? filteredUsers.slice(startIndex, endIndex)
      : filteredUsers;

  res.status(200).json({
    filteredUsers: filteredUsers,
    paginatedUsers: paginatedUsers,
    totalPages: totalPages,
  });
};

// Helper function to filter users based on criteria
function filterUsers(users, search, domain, gender, availability) {
  let filteredUsers = users;
  if (search) {
    const query = search.toLowerCase();
    filteredUsers = filteredUsers.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query) ||
        user.last_name.toLowerCase().includes(query)
    );
  }

  if (domain) {
    filteredUsers = filteredUsers.filter((user) =>
      domain.includes(user.domain)
    );
  }

  if (gender) {
    filteredUsers = filteredUsers.filter((user) =>
      gender.includes(user.gender)
    );
  }

  if (availability) {
    const availabilityBool = JSON.parse(availability);
    filteredUsers = filteredUsers.filter(
      (user) => user.available === availabilityBool
    );
  }

  return filteredUsers;
}

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

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
};
