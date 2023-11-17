const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.send("Working");
});

// 404 Handler
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

// Error Handler
app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  res.render("error_40x", { error });
});

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDb"))
  .catch((err) => {
    console.log("connecting problem Error: ", err);
  });

app.listen(PORT, () => {
  console.log("Server is up and running on post : ", PORT);
});
