const express = require("express");
const router = express.Router();
const utils = require("../utils");
const queries = require("../db/queries");

router.get("/", (req, res) => {
  queries.getAll().then((clucks) => {
    res.render("index", { clucks, utils });
  });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", (req, res) => {
  queries
    .add({
      username: req.cookies.username,
      content: req.body.content,
      imageUrl: req.body.imageUrl,
    })
    .then((cluck) => {
      res.redirect("/");
    });
});

module.exports = router;
