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
  const APP_id = "1cae3554";
  const APP_key = "1881183b30fff753c36d0ffcb8a20d2c";
  const response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${APP_key}&q=${params}`);
  const body = await response.json()
  console.log("response", body);
  res.json(body);

});

//https://api.spoonacular.com/recipes/findByIngredients?apiKey=73760b73b3fd4ae1ac47f74ebd4ac47c&ingredients=apples,+flour,+sugar&number=2
router.get('/api', async (req, res) => {
  const APP_id = "1cae3554";
  const APP_key = "1881183b30fff753c36d0ffcb8a20d2c";
  const response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${APP_key}&q=salad`);
  const data = await response.json();
  res.send(data);


});

router.get('/api/:id')


module.exports = router;
