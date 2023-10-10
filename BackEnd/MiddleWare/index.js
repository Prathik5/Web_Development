const express = require("express");
const app = express();
const morgan = require("morgan");
const appError = require("./appError");

// app.use(morgan("dev"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "pkbro") next();

  throw new appError("Please put a password", 401);
};

app.get("/", (req, res, next) => {
  console.log(`Request Time: ${req.requestTime}`);
  res.send("Yoo brother");
  console.log("HomePage");
});

app.get("/dogs", (req, res) => {
  //   console.log("Bow Bow");
  res.send("Bow Bow");
});

app.get("/secret", verifyPassword, (req, res, next) => {
  res.send("I peed in pool");
});

app.get("/error", (req, res) => {
  dog.run();
});

app.use((req, res) => {
  res.status(404).send("Not Found!!");
});

app.use(function (err, req, res, next) {
  console.log("*******************");
  console.log("*******ERROR*******");
  console.log("*******************");
  // res.status(500).send("OH boy!! an error");
  next(err);
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
