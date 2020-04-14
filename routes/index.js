const router = require("express").Router();
const queries = require("../db/queries");
const utils = require("../utils");
const ONE_DAY = new Date(Date.now() + 1000 * 60 * 60 * 24);

//Home route:
router.get("/", (req, res) => {
  queries
    .getAll(req.params.id, {
      username: req.cookies.username,
      content: req.body.content,
      imageUrl: req.body.imageUrl,
    })
    .then((clucks) => {
      res.render("index", { clucks, utils });
    });
});

// Sign in route:
router.get("/sign_in", (req, res) => {
  res.render("sign_in");
});

// Post route:
router.post("/sign_in", (req, res) => {
  const { username } = req.body;
  res.cookie("username", username, { expires: ONE_DAY });
  res.redirect("/");
});

// Sign out route:
router.post("/sign_out", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;
