const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashed
  });
  res.redirect("/login");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.redirect("/login");
  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.redirect("/login");
  req.session.userId = user._id;
  res.redirect("/movies");
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
