const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');


router.get('/', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({ users: data });
  })
});

router.post("/", (req, res) => {
  console.log("router.post req.body:", req.body)
  const email = req.body.email;
  users.getUserbyEmail(email)
    .then((data) => {
      if (data) {
        console.log("data returned from getUserbyEmail:", data)
        res.json(data);
      }
      else {
        users.createUser(req.body)
          .then(data => {
            res.cookie("user_id", data.user_id);
            console.log("data returned from createUser:", data)
            res.json(data);
          })
      }

    });
});

module.exports = router;