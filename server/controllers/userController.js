import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";

//register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "All fileds are required" });
  }
  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.json({ success: false, message: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashPassword,
      role: "user",
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "10d",
      }
    );

    await user.save();

    res.cookie("token", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production" ? 'false' : 'true',
      sameSite: "None",
      path: "/",
      expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days expiry
    });


    return res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.log(error);

    return res.json({ success: false, message: "Something went wrong" });
  }
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "All fileds are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ sucess: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ sucess: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "10d",
      }
    );

    res.cookie("token", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production" ? 'false' : 'true',
      sameSite: "None",
      path: "/",
      expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days expiry
    });

    return res.json({ success: true, message: "User logged in successfully",token });
  } catch (error) {
    console.log(error);
    
    return res.json({ success: false, message: "Something went wrong", error });
  }
};

//logout user
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    return res.json({ success: false, message: "Something went wrong" });
  }
};

export { registerUser, loginUser, logoutUser };
