Project Overview

This is a Movie Watchlist web application built with Node.js, Express, MongoDB, and EJS. Users can create an account, log in, and manage their own list of movies. The app supports adding movies, viewing them, editing them, and deleting them. Each user only sees their own movies.

Features

Authentication

Register

Login

Logout

Password hashing

Session protection

Movie Functions (CRUD)

Add a movie

View all movies

Edit movies

Delete movies

Styling

Simple pastel theme using Bootstrap and custom CSS

How to Run

Install packages:

npm install


Add your MongoDB connection string in .env

MONGO_URI=your_link_here


Start the server:

node app.js


Open:

http://localhost:3000

Routes

Auth: /register, /login, /logout
Movies: /movies, /movies/new, /movies/:id/edit

Author
Sarah Soueidan