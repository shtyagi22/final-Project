const db = require('../../configs/db.config');

const getAllComments = () => {
	return db.query("SELECT * FROM comments;").then(data => {
		return data.rows;
	})
}

const createComments = (userParams) => {
  console.log("userparams from createComments:", userParams);
  return db.query("INSERT INTO comments (fullname, email, password) VALUES ($1, $2, $3) returning *", [userParams.name, userParams.email, userParams.password])
    .then(data => {
      console.log("create user data.rows:", data.rows[0]);
      return data.rows[0];
    })
}

const getUserbyEmail = (email) => {
  console.log("I am inside getUserbyEmail");
  return db.query("SELECT * FROM users where email= $1;", [email])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = {getAllComments}