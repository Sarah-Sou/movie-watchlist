require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const authRouter = require("./routes/authRouter");
const movieRouter = require("./routes/movieRouter");
const requireLogin = require("./middleware/requireLogin");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

mongoose.connect(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/", authRouter);
app.use("/movies", requireLogin, movieRouter);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
