const express = require("express");
const app = express();

const mongoose = require("mongoose");

require("dotenv").config();

app.use(express.json());

// models
const User = require("./models/user");

// routes

app.get("/", async (req, res) => {
   const userArray = await User.find({});
   res.json(userArray);
});

// connection

mongoose.connect(process.env.DB_STRING).catch((error) => {
   console.log(error);
});

app.listen(process.env.PORT, () => {
   console.log(`Listening in port: ${process.env.PORT}`);
});
