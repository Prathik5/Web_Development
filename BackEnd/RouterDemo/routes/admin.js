const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.send("Just go away my man");
  }
});

router.get("/", (req, res) => {
  res.send("Hey admin");
});
router.post("/", (req, res) => {
  res.send("Created something brother");
});
router.get("/:id", (req, res) => {
  res.send("Hey you big bro");
});
router.get("/:id/edit", (req, res) => {
  res.send("You wanna edit(with rizz)");
});

module.exports = router;
