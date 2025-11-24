const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/auth/register", (req, res) => res.render("auth/register"));
router.post("/auth/register", async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  req.session.userId = user._id;
  res.redirect("/movies");
});

router.get("/auth/login", (req, res) => res.render("auth/login"));
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.redirect("/auth/login");
  const valid = await user.comparePassword(password);
  if (!valid) return res.redirect("/auth/login");
  req.session.userId = user._id;
  res.redirect("/movies");
});

router.post("/auth/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/auth/login");
});

module.exports = router;
