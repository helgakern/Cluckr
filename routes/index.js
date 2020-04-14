const express = require("express");
const route = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Cluckr" });
});

module.exports = router;
