const db = require('../../configs/db.config');

const getAllIngredients = () => {
	return db.query("SELECT * FROM ingredients;").then(data => {
		return data.rows;
	})
}


module.exports = {getAllIngredients}