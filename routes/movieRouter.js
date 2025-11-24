const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

function requireLogin(req, res, next) {
  if (!req.session.userId) return res.redirect("/login");
  next();
}

router.get("/movies", requireLogin, async (req, res) => {
  const movies = await Movie.find({ user: req.session.userId }).sort({ title: 1 });
  res.render("list", { movies });
});

router.get("/movies/new", requireLogin, (req, res) => {
  res.render("new");
});

router.post("/movies", requireLogin, async (req, res) => {
  await Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year,
    status: req.body.status,
    user: req.session.userId,
  });

  res.redirect("/movies");
});

router.get("/movies/:id/edit", requireLogin, async (req, res) => {
  const movie = await Movie.findOne({
    _id: req.params.id,
    user: req.session.userId,
  });

  if (!movie) return res.redirect("/movies");

  res.render("edit", { movie });
});

router.put("/movies/:id", requireLogin, async (req, res) => {
  await Movie.findOneAndUpdate(
    { _id: req.params.id, user: req.session.userId },
    req.body
  );
  res.redirect("/movies");
});

router.delete("/movies/:id", requireLogin, async (req, res) => {
  await Movie.findOneAndDelete({
    _id: req.params.id,
    user: req.session.userId,
  });

  res.redirect("/movies");
});

module.exports = router;
