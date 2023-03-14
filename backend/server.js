const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());

// models
const Post = require("./models/post");

const newPost = new Post({
   title: "The Forest",
   caption: "asdasdqsdasd",
   date: new Date(),
   likes: 5,
});
  
// routes

// get all posts
app.get("/posts", (req, res) => {
   
});

// get user's posts
app.get("/posts/:user", (req, res) => {
   //
});

// create a new post
app.post("/posts", (req, res) => {
   //
});

// update an existing post
app.put("/posts/:id", (req, res) => {
   //
});

// delete a post  
app.delete("/posts/:id", (req, res) => {
   // 
});

// app.post("/posts", async (req, res) => {
//    await newPost.save();
//    const postArray = await Post.find({});
//    res.json(postArray);
// });

// app.get("/posts", async (req, res) => {
//    const postArray = await Post.find({});
//    res.json(postArray);
// });

// connection
main().catch((error) => {
   console.log(error);
});

async function main() {
   await mongoose.connect(process.env.DB_STRING);
}

// server listen
app.listen(process.env.PORT, () => {
   console.log(`Listening in port: ${process.env.PORT}`);
});
