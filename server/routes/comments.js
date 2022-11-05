const express = require('express');
const router = express.Router();
const comments = require('../db/queries/comments');



router.get('/', (req, res) => {
  comments.getAllComments().then(data => {
    console.log(data);
    res.json({ comments: data });
  })
});

router.post("/", (req, res) => {
  console.log("router.post req.body:", req.body)
  const recipeId = req.body.recipeId;
  console.log("recipeId:", recipeId)
  comments.createComments(req.body)
    .then(data => {
      console.log("data returned from createComments:", data)

      comments.getCommentbyRecipeId(recipeId)
        .then((data) => {
          console.log("data returned from getCommentbyRecipeId:", data)
          res.json(data);
        });

    });
});

module.exports = router;