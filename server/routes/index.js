var express = require('express');
var router = express.Router();
const { request } = require('express');
const fetch = require('node-fetch');



/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/api', async (req, res) => {
  const data = req.body;
  console.log("WE ARE IN THE SERVER", data);

  const fetch_ingredients = function (arr) {
    let ingredients = [];
    let string = "";
    for (let i of arr) {
      ingredients.push(i.ingredient)
    }
    console.log("ingredients array:", ingredients);
    for (let ing = 0; ing < ingredients.length; ing++) {
      string += ingredients[ing] + ",+";

    }
    return string;
  }
  const params = fetch_ingredients(data);
  const APP_id = "e7215228";
  const APP_key = "2f5c8ccb5407391f803663f04d6a1671";
  const response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${APP_key}&q=${params}`);
  const body = await response.json()
  console.log("response", body);
  res.json(body);

});

//https://api.spoonacular.com/recipes/findByIngredients?apiKey=73760b73b3fd4ae1ac47f74ebd4ac47c&ingredients=apples,+flour,+sugar&number=2
router.get('/api', async (req, res) => {
  const APP_id = "e7215228";
  const APP_key = "2f5c8ccb5407391f803663f04d6a1671";
  const response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${APP_key}&q=avocados`);
  const data = await response.json();
  res.send(data);


});


module.exports = router;
