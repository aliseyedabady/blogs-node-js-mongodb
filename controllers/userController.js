const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { json } = require("express");

module.exports.userCreate = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.exists({ username });
    if (usernameCheck) {
      return res.json({ status: false, msg: "username is already used" });
    }
    const emailCheck = await User.exists({ email });
    if (emailCheck) {
      return res.json({ status: false, msg: "email is already used" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    res.json({ status: false, msg: error.message });
  }
};
