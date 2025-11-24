require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");

const app = express();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Homepage redirect (IMPORTANT for Render)
app.get("/", (req, res) => {
    res.redirect("/movies");
});

// Routes
const movieRouter = require("./routes/movieRouter");
app.use("/", movieRouter);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Error:", err));

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
