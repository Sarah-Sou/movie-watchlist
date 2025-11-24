const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  await User.create({ username, password: hash });
  res.redirect("/login");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.redirect("/login");
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.redirect("/login");
  req.session.userId = user._id;
  res.redirect("/movies");
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/"));
});

module.exports = router;
