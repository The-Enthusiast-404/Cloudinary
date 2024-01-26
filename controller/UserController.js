const User = require("../model/User");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "All users", users });
  } catch (error) {
    res.status(400).json({ message: "Error", error: error.message });
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ message: "User", user });
  } catch (error) {
    res.status(400).json({ message: "Error", error: error.message });
  }
};

module.exports = { getAllUsers, getUserById };
