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

//to update user
router.route("/:id").put((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.email = req.body.email;
      user.password = req.body.password;
      user.bio = req.body.bio;
      user.gender = req.body.gender;
      user.age = Number(req.body.age);
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.date = Date.parse(req.body.date);

      user
        .save()
        .then(() => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
