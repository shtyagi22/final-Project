const express = require('express');
const router = express.Router();
const posts = require('../db/queries/posts');



router.get('/', (req, res) => {
  posts.getAllPosts().then(data => {
    console.log(data);
    res.json({posts: data});
  })
});

module.exports = router;