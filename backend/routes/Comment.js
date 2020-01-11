const router = require("express").Router();
let Comment = require("../models/Comment.model");

// create Comment

router.route("/").post((req, res) => {
  const body = req.body;
  var myComment = new Comment(body);
  myComment
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
