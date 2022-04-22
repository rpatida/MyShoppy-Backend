const User = require("../models/user");

exports.auth = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  console.log("user...", user);

  if (!user) {
    res
      .status(404)
      .json({ success: false, message: "Invalid username or password" });
  }

  if (user.password === password) {
    res.status(200).json({ success: true, message: "login successfully" });
  }

  res
    .status(404)
    .json({ success: false, message: "Invalid username or password" });
};

exports.createUser = async (req, res) => {
  const { name, username, password, address } = req.body;

  const email = await User.findOne({ username });

  if (email) {
    return res.status(404).json({
      message: ` ${username} already exists`,
    });
  }

  const user = await User.create({
    name,
    username,
    password,
    address,
  }).catch((err) => {
    return res.status(400).json({
      err,
    });
  });

  res.status(200).json({
    success: true,
    user,
  });
};

exports.getUsers = async (req, res) => {
  const users = await User.find();

  if (!users) {
    return res.status(200).json({
      message: "User not found",
    });
  }

  return res.status(200).json({
    success: true,
    users,
  });
};
