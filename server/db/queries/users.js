const db = require('../../configs/db.config');

const createUser = (userParams) => {
  console.log("userparams from createUser:", userParams);
  return db.query("INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) returning *", [userParams.name, userParams.email, userParams.password])
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

const getAllUsers = () => {
  return db.query("SELECT * FROM users;").then(data => {
    return data.rows;
  })
}

const getUserById = id => {
  return db.query("SELECT * FROM users; WHERE id = $1", [id]).then(data => {
    return data.rows;
  })
}


module.exports = { createUser, getUserbyEmail, getAllUsers, getUserById }