const checkIsAdmin = (req, res, next) => {    
    if (req.user.userRole !== "admin") {
        return res.status(403).json({ message: "You are not authorized" });
    } 
    next();
};
    
export default checkIsAdmin