const express = require("express");
const router = new express.Router();

router.get("/login", async (req, res, next) => {
  res.send("login");
});
router.get("/register", async (req, res, next) => {
  res.send("reg");
});

router.post("/login", async (req, res, next) => {
  res.send("login post");
});

router.post("/register", async (req, res, next) => {
  res.send("reg post");
});

router.get("/logout", async (req, res, next) => {
  res.send("logout");
});

module.exports = router;
