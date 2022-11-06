const db = require('../../configs/db.config');

const getAllPostComments = () => {
  return db.query("SELECT * FROM post_comments;").then(data => {
    return data.rows;
  })
}

const createPostComments = (userParams) => {
  console.log("userparams from createPostComments:", userParams);
  return db.query("INSERT INTO postComments (comment_text, post_id, user_id) VALUES ($1, $2, $3) returning *", [userParams.text, userParams.postId, userParams.userId])
    .then(data => {
      console.log("create user data.rows:", data.rows[0]);
      return data.rows[0];
    })
}

const getPostCommentbyPostId = (postId) => {
  console.log("I am inside getPostCommentbyPostId:", postId);
  return db.query("SELECT * FROM postComments where post_id = $1;", [postId])
    .then(data => {
      console.log("data.rows:", data.rows);
      return data.rows;
    });
};

module.exports = { getAllPostComments, createPostComments, getPostCommentbyPostId }