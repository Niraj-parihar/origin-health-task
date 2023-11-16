const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is up and running on post : ", PORT);
});
