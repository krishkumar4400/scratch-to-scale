const jwt = require("jsonwebtoken");

async function isAuthenticated(req, res, next) {
  try {
    const { token } = req.cookies;

    if (!token) {
      return next();
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.id;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "user not authorized",
      success: false,
    });
  }
}

function verifyAuthentication(req, res, next) {
  if (!req.userId) {
    return res.status(401).json({
      message: "You are not logged in",
      success: false,
    });
  }
  next();
}

module.exports = {
  isAuthenticated,
  verifyAuthentication,
};
