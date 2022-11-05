const express = require('express');
const router = express.Router();
const comments = require('../db/queries/comments');



router.get('/:id', (req, res) => {
  console.log("req.params.id:", req.params.id)
  const recipeId = req.params;
  console.log("recipeId:", recipeId)
  comments.getCommentbyRecipeId(recipeId)
  .then((data) => {
    console.log("data returned from getCommentbyRecipeId:", data)
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