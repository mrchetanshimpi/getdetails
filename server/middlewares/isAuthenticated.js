const jwt = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
      const token = authHeader.split(" ")[1]; //bearer token coming from here
      if (token) {
        // here compare jwt token

        return next();
      }
    }
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = isAuthenticated;
