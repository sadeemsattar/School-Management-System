const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["accessToken"];

  if (!accessToken) {
    return res
      .status(400)
      .json({ status: "failed", message: "User Not Authenticated" });
  }

  try {
    const validToken = verify(accessToken, process.env.secret);
    if (validToken) {
      req.name = validToken.name;
      req.isAdmin = validToken.isAdmin;
      // console.log(validToken);
      return next();
    }
  } catch (err) {
    res
      .status(400)
      .json({ status: "Failed", err, message: "User Not Authenticated" });
  }
};
const verifyAdmin = (req, res, next) => {
  if (req.isAdmin == true) {
    // console.log(req.admin, req);
    return next();
  } else {
    res.status(400).json({ status: "Falied", message: "Access Is Restricted" });
  }
};
module.exports = { verifyAdmin, validateToken };
