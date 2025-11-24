/* Body */
body {
  background-color: #fef6f0;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

/* Navbar */
.navbar {
  background-color: #ffe6f0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar a {
  color: #8c5e7a !important;
  font-weight: 600;
  text-decoration: none;
  margin-left: 1rem;
}

/* Page title */
.page-title {
  color: #8c5e7a;
  margin: 2rem 0 1rem 0;
  text-align: center;
  font-size: 2rem;
}

/* Cards */
.card {
  background-color: #fff0f6;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
}

/* Buttons */
.btn-pastel {
  background-color: #c4a7e7;
  color: #fff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-pastel:hover {
  background-color: #a37de1;
}

.btn-edit {
  background-color: #ffd166;
  color: #000;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.btn-delete {
  background-color: #ef476f;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

/* Movie list items */
.list-group-item {
  background-color: #fff;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
}

/* Status badges */
.badge {
  background-color: #d9c2ff;
  color: #5b3fa3;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-weight: 500;
}

/* Auth cards */
.auth-card {
  background-color: #fff0f6;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 3rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.auth-card input {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.auth-card button {
  background-color: #c4a7e7;
  color: #fff;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.auth-card button:hover {
  background-color: #a37de1;
}

/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  color: #8c5e7a;
}
