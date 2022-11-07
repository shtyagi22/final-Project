const express = require('express');
const router = express.Router();
const likes = require('../db/queries/likes');



router.get('/:id', (req, res) => {
  console.log("req.params.id:", req.params.id)
  const UserId = req.params.id;
  console.log("UserId:", UserId)
  likes.getLikesbyUserId(UserId)
    .then((data) => {
      console.log("data returned from getLikesbyUserId:", data)
      res.json(data);
    });
});

router.post("/", (req, res) => {

  likes.createLikes(req.body)
    .then(data => {
      console.log("data returned from likes:", data)

    });
});



module.exports = router;