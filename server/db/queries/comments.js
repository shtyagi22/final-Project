const db = require('../../configs/db.config');

const getAllComments = () => {
  return db.query("SELECT * FROM comments;").then(data => {
    return data.rows;
  })
}

const createComments = (userParams) => {
  console.log("userparams from createComments:", userParams);
  return db.query("INSERT INTO comments (comment_text, rating, api_recipe, user_id) VALUES ($1, $2, $3, $4) returning *", [userParams.comment, userParams.rating, userParams.recipeId, userParams.userId])
    .then(data => {
      console.log("create user data.rows:", data.rows[0]);
      return data.rows[0];
    })
}

const getCommentbyRecipeId = (recipeId) => {
  console.log("I am inside getCommentbyRecipeId:", recipeId);
  return db.query("SELECT c.*, u.* FROM comments c join users u on c.user_id = u.id where api_recipe = $1;", [recipeId])
    .then(data => {

      console.log("data.rows:", data.rows)

      return data.rows;
    });
};

module.exports = { getAllComments, createComments, getCommentbyRecipeId }