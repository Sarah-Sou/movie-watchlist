const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

function requireLogin(req, res, next) {
  if (!req.session.userId) return res.redirect("/login");
  next();
}

// List movies
router.get("/movies", requireLogin, async (req, res) => {
  const movies = await Movie.find({ userId: req.session.userId }).sort({ title: 1 });
  res.render("list", { movies });
});

// New movie form
router.get("/movies/new", requireLogin, (req, res) => res.render("new"));

// Create movie
router.post("/movies", requireLogin, async (req, res) => {
  await Movie.create({ ...req.body, userId: req.session.userId });
  res.redirect("/movies");
});

// Edit movie
router.get("/movies/:id/edit", requireLogin, async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("edit", { movie });
});

// Update movie
router.put("/movies/:id", requireLogin, async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/movies");
});

// Delete movie
router.delete("/movies/:id", requireLogin, async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect("/movies");
});

module.exports = router;
