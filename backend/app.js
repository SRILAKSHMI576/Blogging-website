const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const mongodb_server = process.env.SERVER_URL;
const database_name = process.env.DATABASENAME;

mongoose
  .connect(`mongodb://${mongodb_server}/${database_name}`)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch(err => {
    console.error("Database connection error");
  });

const userRouter = require("./routes/User");

app.use("/users", userRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
