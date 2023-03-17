const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
   username: String,
   user: String,
   title: String,
   caption: String,
   date: Date,
   likes: Number,
   img_url: String,
});

module.exports = mongoose.model("Post", postSchema);
