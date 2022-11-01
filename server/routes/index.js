var express = require('express');
var router = express.Router();
const { request } = require('express');
const fetch = require('node-fetch');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const APP_id = "e7215228";
const APP_key = "2f5c8ccb5407391f803663f04d6a1671";

router.get('/api', async (req, res) => {
  const response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${APP_key}&q=pizza`);
  const data = await response.json();
  res.send(data);


});

module.exports = router;
