const mongoose = require("mongoose");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

require("dotenv").config();
app.use(express.json());

// models
const Post = require("./models/post");
const User = require("./models/user");

// routes
// ================== USER REQUESTS ======================
// get all users
app.get("/users", async (req, res) => {
   const usersArray = await User.find({});
   res.json(usersArray);
});

// get a useer with matching password
app.get("/login/:username", async (req, res) => {
   const targetUser = await User.find({
      username: req.params.username,
   });

   res.json(targetUser);
});

// get a useer with matching password
app.get("/login", async (req, res) => {
   const targetUser = await User.find({
      username: req.body.username,
      password: req.params.pass,
   });

   if (targetUser != []) {
      res.send("MATCH");
   } else if (targetUser == []) {
      res.send("NO MATCH");
   }

   // res.json(usersArray);
});

// create a new user or get user
app.post("/login", async (req, res) => {
   console.log("Creating new user or loging in user");

   const targetUser = await User.find({ username: req.body.username });

   const newUser = new User({
      username: req.body.username,
      password: req.body.password,
   });

   await newUser
      .save()
      .then((response) => {
         res.send(response.username);
         res.json({
            usernameOk: true,
            username: response.username,
         });
      })
      .catch(() => {
         res.json({
            usernameOk: false,
            message: "Username already exists.",
         });
      });
});

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

// ================== PUT REQUESTS ======================

// edit an existing post
app.put("/posts/editpost", async (req, res) => {
   console.log("attempting to update data in DB");
   const newPost = new Post({
      username: req.body.username,
      user: req.body.user,
      title: req.body.title,
      caption: req.body.caption,
      likes: req.body.likes,
      date: req.body.date,
      img_url: req.body.img_url,
   });

   const doc = Post.findById(req.body._id);
   const output = (await doc).overwrite(newPost);
   output.save();
   console.log(output);

   res.json(req.body);
});

// ================== DELETE REQUESTS ======================

// edit an existing post
app.delete("/posts/deletepost/:id", async (req, res) => {
   console.log("attempting to delete data in DB");

   await Post.findByIdAndDelete(req.params.id).then(() => {
      console.log("post deleted");
   });
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
