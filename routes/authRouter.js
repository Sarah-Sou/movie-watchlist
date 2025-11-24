const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/register", (req, res) => res.render("auth/register"));
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
  req.session.userId = user._id;
  res.redirect("/movies");
});

router.get("/login", (req, res) => res.render("auth/login"));
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.redirect("/login");
  const valid = await user.comparePassword(password);
  if (!valid) return res.redirect("/login");
  req.session.userId = user._id;
  res.redirect("/movies");
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
