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
  console.log("req.params.id:", req.params.id)
  const postId = req.params.id;
  console.log("postId:", postId)
  comments.getPostCommentbyPostId(postId)
    .then((data) => {
      console.log("data returned from getPostCommentbyPostId:", data)
      res.json(data);
    });
});

router.post("/", (req, res) => {

  comments.createComments(req.body)
    .then(data => {
      console.log("data returned from createComments:", data)

    });
});

module.exports = router;