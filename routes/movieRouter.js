const express = require("express");
const Movie = require("../models/movie");
const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Movie.find().sort({ title: 1 });
  res.render("index", { movies });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", async (req, res) => {
  const { title, genre, year, status } = req.body;
  await Movie.create({ title, genre, year, status });
  res.redirect("/movies");
});

router.get("/:id/edit", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("edit", { movie });
});

router.put("/:id", async (req, res) => {
  const { title, genre, year, status } = req.body;
  await Movie.findByIdAndUpdate(req.params.id, { title, genre, year, status });
  res.redirect("/movies");
});

router.get("/:id/delete", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("delete", { movie });
});

router.delete("/:id", async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect("/movies");
});

module.exports = router;
