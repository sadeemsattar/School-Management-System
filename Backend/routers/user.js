const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config");

router.post(`/register`, async (req, res) => {
  const name = req.body.name;
  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const isAdmin = req.body.isAdmin;
  db.query(
    "insert into adminRegister values(?,?,?)",
    [name, passwordHash, isAdmin],
    (err, result) => {
      if (err) {
        return res.status(400).json({ status: "failed" });
      }
      res.status(200).json({ status: "success", result });
    }
  );
});

router.post(`/login`, async (req, res) => {
  db.query(
    "select * from adminRegister where name=? and isAdmin=?",
    [req.body.name, req.body.isAdmin],
    (err, row) => {
      if (err) {
        return res.status(401).send("Error In Login!");
      }
      if (row.length == 1) {
        if (bcrypt.compareSync(req.body.password, row[0].password)) {
          const token = jwt.sign(
            {
              name: req.body.name,
              isAdmin: req.body.isAdmin,
            },
            process.env.secret,
            {}
          );

          res.cookie("accessToken", token, {
            // maxAge: 3800000, //30 min
            httpOnly: true,
          });
          return res.status(200).send({
            msg: "User Authenticated",
            token: token,
          });
        } else {
          return res.status(401).send("Incorrect Password!");
        }
      }
    }
  );
});

module.exports = router;
