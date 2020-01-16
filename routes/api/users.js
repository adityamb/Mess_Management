
const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load User Schema
const User = require("../../models/User");

// Load input validation
// const validateRegisterInputs = require("../../validation/register");
// const validateLoginInputs = require("../../validation/login");

// testing router
router.get("/test", (req, res) => {
  res.json({ msg: "users works" });
});

// Register user
router.post("/register", (req, res) => {

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        //   errors.email='Email already exist';
        return res.status(400).json("Email already exist");
      } else {
        const newUser = new User({
          name: req.body.name,
          branch: req.body.branch,
          year: req.body.year,
          messnumber: req.body.messnumber,

          email: req.body.email,
          phone: req.body.phone,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

// Login User
router.post("/login", (req, res) => {
  // const { errors, isValid } = validateLoginInputs(req.body);
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      // errors.email = "User not found";
      return res.status(404).json("User not found");
    } else {
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          // errors.password = "Password not match";
          res.status(400).json("Password not match");
        }
      });
    }
  });
});

// Getting current user
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      branch: req.user.branch,
      year: req.user.year,
      messnumber: req.user.messnumber,

      email: req.user.email,
      phone: req.user.phone,
      password: req.user.password
    });
  }
);

module.exports = router;