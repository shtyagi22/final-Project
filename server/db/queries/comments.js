const db = require('../../configs/db.config');

const getAllComments = () => {
	return db.query("SELECT * FROM comments;").then(data => {
		return data.rows;
	})
}

module.exports = {getAllComments}