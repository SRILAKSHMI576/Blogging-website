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

module.exports = router;
