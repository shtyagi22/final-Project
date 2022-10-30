const db = require('../../configs/db.config');

const getAllPostComments= () => {
	return db.query("SELECT * FROM post_comments;").then(data => {
		return data.rows;
	})
}

module.exports = {getAllPostComments}