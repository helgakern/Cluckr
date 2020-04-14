const express = require("express");
const route = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Cluckr" });
});

module.exports = router;
