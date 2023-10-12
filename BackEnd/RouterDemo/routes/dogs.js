const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.cookie("name", "Prathik");
  res.send("All dogs");
});
router.post("/", (req, res) => {
  res.send("Create dogs");
});
router.get("/:id", (req, res) => {
  res.send("One dog");
});
router.get("/:id/edit", (req, res) => {
  res.send("Edit dogs");
});

module.exports = router;
