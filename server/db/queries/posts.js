const db = require('../../configs/db.config');

const getAllPosts= () => {
	return db.query("SELECT * FROM posts;").then(data => {
		return data.rows;
	})
}


const createPosts = (userParams) => {
  console.log("userparams from createPosts:", userParams);
  return db.query("INSERT INTO posts (post_text, image, user_id) VALUES ($1, $2, $3, $4) returning *", [userParams.comment, userParams.rating, userParams.recipeId, userParams.userId])
    .then(data => {
      console.log("create user data.rows:", data.rows[0]);
      return data.rows[0];
    })
}

const getPostsbyUserId = (userId) => {
  console.log("I am inside getCommentbyRecipeId:", recipeId);
  return db.query("SELECT * FROM comments where api_recipe= $1;", [recipeId])
    .then(data => {
      console.log("data:", data)
      console.log("data.rows:", data.rows)

      return data.rows;
    });
};

module.exports = {getAllPosts, createPosts, getPostsbyUserId}