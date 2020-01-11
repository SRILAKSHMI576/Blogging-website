const router = require("express").Router();
let User = require("../models/User.model");

//Create user
router.route("/").post((req, res) => {
  const body = req.body;
  var myData = new User(body);
  myData
    .save()
    .then(doc => {
      res.status(201);
      return res.send(doc);
    })
    .catch(err => {
      res.status(404);
      res.send(err);
    });
});

module.exports = router;
