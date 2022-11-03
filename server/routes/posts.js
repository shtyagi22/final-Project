const express = require('express');
const router = express.Router();
const posts = require('../db/queries/posts');



router.get('/', (req, res) => {
  posts.getAllPosts().then(data => {
    console.log(data);
    res.json({posts: data});
  })
});

router.post('/', (req,res)=>{
  console.log(req.body)
})

module.exports = router;