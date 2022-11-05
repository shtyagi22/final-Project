const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
const fetch = require('node-fetch');



router.post('/:id', async (req,res) => {
  console.log("params Id", req.params.id)
  const APP_id = "e7215228";
  const APP_key = "2f5c8ccb5407391f803663f04d6a1671";
  const response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${APP_key}&q=${req.params.id}`);
  const body = await response.json()
  console.log("response", body);
  res.json(body);
})

module.exports = router;