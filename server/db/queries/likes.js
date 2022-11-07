const db = require('../../configs/db.config');

const getAllLikes = () => {
  return db.query("SELECT * FROM likes;").then(data => {
    return data.rows;
  })
}

const createLikes = (userParams) => {
  console.log("userparams from createLikes:", userParams);
  return db.query("INSERT INTO likes (user_id, api_recipe) VALUES ($1, $2) returning *", [userParams.userId, userParams.recipeId])
    .then(data => {
      console.log("createLikes data.rows:", data.rows[0]);
      return data.rows[0];
    })
}

const getLikesbyUserId = (UserId) => {
  console.log("I am inside getLikesbyUserId:", UserId);
  return db.query("SELECT * FROM likes where user_id = $1;", [UserId])
    .then(data => {

      console.log("data.rows:", data.rows)

      return data.rows;
    });
};

module.exports = { getAllLikes, createLikes, getLikesbyUserId }