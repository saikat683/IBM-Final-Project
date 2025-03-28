const userModel = require("../models/User");
const projectModel=require("../models/Projects");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(404).json({ message: "Email is already registered" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: "Registration Successfull" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    console.log("user not found");
    return res.status(404).json({ message: "Invalid Crediantials" });
  }
  const isMatch = await bcrypt.compare(password,user.password);
  if (!isMatch) {
    console.log("Password mismatch");
    return res.status(404).json({ message: "Invalid Crediantials" });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return res.status(200).json({ user, token,message:"Login Successful"});
};

module.exports = { signUp, login};
