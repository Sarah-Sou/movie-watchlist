const Movie = require("../models/movie");

// Home splash page
exports.showHome = (req, res) => {
  res.render("index");
};

// List all movies
exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ title: 1 });
    res.render("movies/list", { movies });
  } catch (err) {
    console.log(err);
    res.send("Error loading movies");
  }
};

// Show Add Movie form
exports.showAddForm = (req, res) => {
  res.render("movies/new");
};

// Create a new movie
exports.createMovie = async (req, res) => {
  try {
    await Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      year: req.body.year,
      status: req.body.status
    });
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
    res.send("Error creating movie");
  }
};

// Show Edit form
exports.showEditForm = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render("movies/edit", { movie });
  } catch (err) {
    console.log(err);
    res.send("Error loading edit page");
  }
};

// Update Movie
exports.updateMovie = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
    res.send("Error updating movie");
  }
};

// Show Delete Confirmation
exports.showDeleteConfirm = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render("movies/delete", { movie });
  } catch (err) {
    console.log(err);
    res.send("Error loading delete page");
  }
};

// Delete Movie
exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
    res.send("Error deleting movie");
  }
};
