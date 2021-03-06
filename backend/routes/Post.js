const router = require("express").Router();
let Post = require("../models/Post.model");

//Create post
router.route("/").post((req, res) => {
  const body = req.body;
  var myPost = new Post(body);
  myPost
    .save()
    .then(doc => {
      res.status(201);
      return res.send(doc);
    })
    .catch(err => {
      res.status(404);
      return res.send(err);
    });
});

// to delete a exercise
router.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(doc => {
      res.status(204);
      console.log("del. successfully");
      return res.json(doc);
    })
    .catch(err => {
      res.status(400);
      return res.send(err);
    });
});

//to update post
router.route("/:id").put((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.title = req.body.title;
      post.description = req.body.description;
      post.likes = req.body.likes;
      post.image_url = req.body.image_url;
      post.author = req.body.author;
      post.date = Date.parse(req.body.date);

      post
        .save()
        .then(() => res.json(post))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

//Create an API for showing the blog posts
router.route("/").get((req, res) => {
  Post.find()
    .then(doc => {
      console.log("Response Resolved");
      return res.send(doc);
    })
    .catch(err => {
      console.log("Response failed");
      return res.send(err);
    });
});

module.exports = router;
