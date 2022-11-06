const express = require('express');
const router = express.Router();
const ingredients = require('../db/queries/ingredients');



router.get('/', (req, res) => {
  ingredients.getAllIngredients().then(data => {
    console.log(data);
    res.json(data);
  })
});



module.exports = router;