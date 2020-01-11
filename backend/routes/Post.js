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
module.exports = router;
