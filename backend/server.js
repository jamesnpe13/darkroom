const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

require("dotenv").config();
app.use(express.json());

// models
const Post = require("./models/post");

// routes
// ================== GET REQUESTS ======================
// get all posts
app.get("/posts/allposts", async (req, res) => {
   const postArray = await Post.find({});
   res.json(postArray);
});

// get a post from all posts
app.get("/posts/allposts/:id", async (req, res) => {
   const postArray = await Post.findById({ _id: req.params.id });
   res.json(postArray);
});

// get all posts from a user
app.get("/posts/:user/allposts", async (req, res) => {
   const postArray = await Post.find({ user: req.params.user });
   res.json(postArray);
});

// get a post from a user
app.get("/posts/:user/:id", async (req, res) => {
   const postArray = await Post.find({ user: req.params.user, _id: req.params.id });
   res.json(postArray);
});

// ================== POST REQUESTS ======================

// create a new post
app.post("/posts/newpost", async (req, res) => {
   console.log("attempting to send data to DB");
   const newPost = new Post({
      username: req.body.username,
      user: req.body.user,
      title: req.body.title,
      caption: req.body.caption,
      likes: Math.trunc(Math.random(100)),
      date: new Date(),
      img_url: req.body.img_url,
   });

   await newPost.save();
   res.json(req.body);
});

// app.post("/posts", async (req, res) => {
//    await newPost.save();
//    const postArray = await Post.find({});
//    res.json(postArray);
// });

// app.get("/sample", async (req, res) => {
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
