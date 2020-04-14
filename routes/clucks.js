const express = require("express");
const router = express.Router();

const queries = require("../db/queries");

router.get("/", (req, res, next) => {
  console.log("This is Clucks Route");
  next();
});

router.get("/new", (req, res) => {
  if (!res.locals.username) {
    res.redirect("/users/login");
  } else {
    res.render("clucks/new");
  }
});

router.post("/new", (req, res) => {
  req.body.username = res.locals.username;
  if (!res.locals.username) {
    res.redirect("/users/login");
  } else {
    queries.create(req.body).then((cluck) => {
      console.log("Cluck submitted. Cluck returned: ", typeof cluck, cluck[0]);
      res.redirect("/clucks");
    });
  }
});

router.get("/", (req, res) => {
  console.log("This is Index Route");
  queries.getAll().then((clucks) => {
    console.log("All clucks:" + typeof clucks);
    res.render("clucks/index", {
      clucks: clucks,
    });
  });
});

module.exports = router;
