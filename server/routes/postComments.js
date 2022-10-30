const express = require('express');
const router = express.Router();
const postComments = require('../db/queries/postComments');



router.get('/', (req, res) => {
  postComments.getAllPostComments().then(data => {
    console.log(data);
    res.json({ postComments: data });
  })
});

module.exports = router;