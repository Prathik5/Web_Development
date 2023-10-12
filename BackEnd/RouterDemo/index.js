const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelter");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

const cookieParser = require("cookie-parser");

app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);
app.use(cookieParser("Thisisthesecret"));

app.get("/setdata", (req, res) => {
  res.cookie("name", "Pk");
  res.cookie("Animal", "Dog");
  res.send("Yo bro there's some cookies");
});

app.get("/greet", (req, res) => {
  const { name = "No-name" } = req.cookies;
  res.send(`Hey there ${name}`);
});

app.get("/getsignedCookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Okay! Signed your cookie");
});

app.listen(9000, () => {
  console.log("Listening on port 9000");
});
