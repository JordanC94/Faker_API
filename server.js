// import express
const express = require("express");
//intialize express app
const app = express();
const User = require("./models/user");
const Company = require("./models/company")
// Routes
app.get("/api/users/new", (req, res) => {
  const newUser = new User()
  res.json(newUser);
});

app.get("/api/company/new", (req, res) => {
  const newCompany = new Company();
  res.json(newCompany);
});
//app.listen is used to run the server on a aspecific port
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
