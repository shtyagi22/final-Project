const db = require('../../configs/db.config');

const getAllPosts= () => {
	return db.query("SELECT * FROM posts;").then(data => {
		return data.rows;
	})
}

module.exports = {getAllPosts}