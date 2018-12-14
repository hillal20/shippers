const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportSetup = require("./facebookPassport.js");

router.get("/", passport.authenticate("facebook"), (req, res) => {
  console.log("facebook redirecting.....!!!");
  res.redirect("https://localhost:3000/projects");
});

// router.get('/', (req, res) => {

//   res.send('facebook redirect')
// })

module.exports = router;
