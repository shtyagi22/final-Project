const db = require('../../configs/db.config');

const getAllPosts = () => {
  return db.query("SELECT * FROM posts;").then(data => {
    return data.rows;
  })
}
// req.body.text,req.body.userId,req.file.path

const createPosts = (text,userId,image) => {
  console.log("userparams from createPosts:", text,userId,image);
  return db.query("INSERT INTO posts (post_text, image, user_id) VALUES ($1, $2, $3) returning *", [text,image,userId])
    .then(data => {
      console.log("createPosts data.rows:", data.rows[0]);
      return data.rows[0];
    })
}

const getPostsbyUserId = (userId) => {
  console.log("I am inside getPostsbyUserId:", userId);
  return db.query("SELECT FROM posts where user_id = $1;", [userId])
    .then(data => {
      console.log("data.rows:", data.rows)
      return data.rows;
    });
};

module.exports = { getAllPosts, createPosts, getPostsbyUserId }