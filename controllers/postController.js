const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.getPost = async (req, res) => {
  let post = await Post.findById(req.params.id);
  res.render("post", { post });
};

exports.getAllPosts = async (req, res) => {
  let posts = await Post.find({});
  res.render("index", {
    posts,
  });
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect("/");
};

exports.editPost = async (req, res) => {
    let post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();   
    res.redirect("/post/"+req.params.id);

};
