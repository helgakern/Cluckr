const express = require("express");
const route = express.Router();
const cookie = require("cookie-parser");

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post("/login", (req, res) => {
  if (!req.body.username) {
    res.redirect("/users/login");
  } else {
    const cookieName = "cluckr";
    res.cookie(cookieName, {
      maxAge: COOKIE_MAX_AGE,
      username: req.body.username,
    });
    res.redirect("/clucks/new");
  }
});

router.get("/logout", (req, res) => {
  const cookieName = "cluckr";
  res.cookie(cookieName, {
    maxAge: COOKIE_MAX_AGE,
    username: undefined,
  });
  res.redirect("/users/login");
});
module.exports = router;
