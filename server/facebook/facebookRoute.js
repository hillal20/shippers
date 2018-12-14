const express = require("express");
const router = express.Router();
const passport = require("passport");
const passportSetup = require("./facebookPassport.js");
router.get(
  "/",
  passport.authenticate("facebook", {
    scope: ["email"]
  })
);

module.exports = router;
