const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const cors = require('cors');
const cookie_session = require('cookie-session');
const Role = require('./app/models/role.model')
const User = require('./app/models/user.model')

const app = express();

var corsOptions = {
    origin : "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded ({ extended: true }));
app.use(
    cookie_session({
      name: "astrie-session",
      keys: ["COOKIE_SECRET"], 
      httpOnly: true
    })
  );

  app.get("/", (req, res) => {
    res.json("Welcome to Astrie's aplication!");
  })


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`The server is running on http//:localhost:${PORT}/`);
})
