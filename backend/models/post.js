const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
   title: String,
   caption: String,
   date: Date,
   likes: Number,
});

module.exports = mongoose.model("Post", postSchema);
