const express = require('express');
const router = express.Router();
const comments = require('../db/queries/comments');



router.get('/', (req, res) => {
  comments.getAllComments().then(data => {
    console.log(data);
    res.json({comments: data});
  })
});

module.exports = router;