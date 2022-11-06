const express = require('express');
const router = express.Router();
const postComments = require('../db/queries/postComments');



// router.get('/', (req, res) => {
//   postComments.getAllPostComments().then(data => {
//     console.log(data);
//     res.json({ postComments: data });
//   })
// });

  router.get('/:id', (req, res) => {
    console.log("postId:", req.params.id)
    postComments.getPostCommentbyPostId(req.params.id)
      .then((data) => {
        console.log("data returned from getPostCommentbyPostId:", data)
        res.json(data);
      });
  });

router.post("/", (req, res) => {
console.log("post repliees from client",req.body)
  postComments.createPostComments(req.body)
    .then(data => {
      console.log("data returned from createComments:", data)

    }).then(()=>{
      postComments.getPostCommentbyPostId(req.body.postid)
      .then((data) => {
        console.log("data returned from getPostCommentbyPostId:", data)
        res.json(data);
      });
    });

});

module.exports = router;