import jwt from "jsonwebtoken";
import User from "../models/userModel.js"; 

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

      const user = await User.findById(decoded.id); 
    if (!user) {      
      return res.status(401).json({ message: "User not found" });
    }      
    req.user = user; 

    next(); 
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authenticateUser;
