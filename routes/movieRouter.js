const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// List movies
router.get("/", async (req, res) => {
  const movies = await Movie.find().sort({ title: 1 });
  res.render("list", { movies });
});

// New movie form
router.get("/new", (req, res) => {
  res.render("new");
});

// Create movie
router.post("/", async (req, res) => {
  await Movie.create(req.body);
  res.redirect("/movies");
});

// Edit movie form
router.get("/:id/edit", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("edit", { movie });
});

// Update movie
router.put("/:id", async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/movies");
});

// Delete movie
router.delete("/:id", async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect("/movies");
});

module.exports = router;
