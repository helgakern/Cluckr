const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

//Import routes:

// Setup view engine:
app.set("view engine", "ejs");
app.set("views", "views");

// Use middleware:
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

//Routes:
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/clucks", clucksRouter);

// Cookies:
app.use(function (req, res, next) {
  const cookie = req.cookie.cluckr || {};
  const username = cookie.username;
  res.locals.username = username;
  next();
});

const DOMAIN = "localhost";
const PORT = "3000";
app.listen(PORT, DOMAIN, () => {
  console.log(`Listening at http://${DOMAIN}:${PORT}`);
});

module.exports = app;
