var express = require('express');
var router = express.Router();
const { request } = require('express');
const fetch = require('node-fetch');



/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/api', (req, res) => {
  const data = req.body;
  console.log("WE ARE IN THE SERVER", data);
  res.json(data)
});



const APP_id = "e7215228";
const APP_key = "2f5c8ccb5407391f803663f04d6a1671";

router.get('/api', async (req, res) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=73760b73b3fd4ae1ac47f74ebd4ac47c&ingredients=apples,+flour,+sugar&number=2`);
  const data = await response.json();
  res.send(data);


});


module.exports = router;
