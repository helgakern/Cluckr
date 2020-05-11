const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();

// Routes:
const indexRouter = require("./routes/index");
const clucksRouter = require("./routes/clucks");

// View engine setup:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  const username = req.cookies.username;
  res.locals.signInUser = username || "";
  next();
});

// Route Middleware:
app.use("/", indexRouter);
app.use("/clucks", clucksRouter);

const DOMAIN = "localhost";
const PORT = 3000;
app.listen(PORT, DOMAIN, () => {
  console.log(
    `Listening at http://${DOMAIN}:${PORT}`
  );
});

module.exports = app;
