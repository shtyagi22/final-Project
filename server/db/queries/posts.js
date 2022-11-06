const db = require('../../configs/db.config');

const getPostByPostId = (id) => {
  return db.query("SELECT * FROM posts where id = $1;",[id]).then(data => {
    return data.rows;
  })
}
// req.body.text,req.body.userId,req.file.path

const createPosts = (text,userId,image) => {
  console.log("userparams from createPosts:", text,userId,image);
  return db.query("INSERT INTO posts (post_text, image, user_id) VALUES ($1, $2, $3) returning * ", [text,image,userId])
    .then(data => {
      console.log("createPosts data.rows:", data.rows[0]);
      return data.rows[0];
    })
}

const getPostsbyUserId = (userId) => {
  console.log("I am inside getPostsbyUserId:", userId);
  return db.query("select p.*, u.id as userId,u.fullname,u.image as profile_image from posts p join users u on p.user_id = u.id where p.user_id = $1;", [userId])
    .then(data => {
      console.log("data.rows:", data.rows)
      return data.rows;
    });
};

module.exports = { getPostByPostId, createPosts, getPostsbyUserId }