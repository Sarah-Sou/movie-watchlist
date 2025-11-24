const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

function requireLogin(req, res, next) {
  if (!req.session.userId) return res.redirect("/login");
  next();
}

router.get("/movies", requireLogin, async (req, res) => {
  const movies = await Movie.find({ userId: req.session.userId }).sort({ title: 1 });
  res.render("list", { movies });
});

router.get("/movies/new", requireLogin, (req, res) => res.render("new"));

router.post("/movies", requireLogin, async (req, res) => {
  const movie = new Movie({ ...req.body, userId: req.session.userId });
  await movie.save();
  res.redirect("/movies");
});

router.get("/movies/:id/edit", requireLogin, async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("edit", { movie });
});

router.put("/movies/:id", requireLogin, async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/movies");
});

router.delete("/movies/:id", requireLogin, async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect("/movies");
});

module.exports = router;
