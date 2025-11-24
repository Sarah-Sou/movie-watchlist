Project Overview

This project is a Movie Watchlist web application built with Node.js, Express, MongoDB, and EJS. It allows users to register, log in, and manage their own list of movies. Users can add movies, view them, update them, and delete them. Each user only sees the movies they created.

Features

Authentication

User registration

Login and logout

Password hashing

Sessions to protect routes

Movie CRUD

Add a movie (title, genre, year, status)

View all movies for the logged-in user

Edit movie details

Delete movies

Design

Pastel theme with simple CSS

Layout uses Bootstrap

Responsive and clean interface

How to Run the App

Install dependencies

npm install


Add your MongoDB connection string inside a .env file

MONGO_URI=your_connection_string_here


Start the server

node app.js


Visit the app in the browser

http://localhost:3000

Routes

Auth Routes

/register

/login

/logout

Movie Routes

/movies

/movies/new

/movies/:id/edit

Database

Movies and users are stored in MongoDB Atlas.
Each movie document contains:

title

genre

year

status

user (owner of the movie)

Author
Sarah Soueidan
Movie Watchlist — CRUD + Authentication
