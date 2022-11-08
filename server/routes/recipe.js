const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');
const fetch = require('node-fetch');



router.get('/:id', async (req,res) => {
  console.log("params Id", req.params.id)
  const APP_id = "1cae3554";
  const APP_key = "1881183b30fff753c36d0ffcb8a20d2c";
  const response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${APP_key}&q=${req.params.id}`);
  const body = await response.json()
  console.log("response", body);
  res.json(body);
})


router.put('/', async (req,res) => {
  console.log("from home search",req.body)
  const food = req.body.searchParam
  const APP_id = "1cae3554";
  const APP_key = "1881183b30fff753c36d0ffcb8a20d2c";
  const response = await fetch(`https://api.edamam.com/search?app_id=${APP_id}&app_key=${APP_key}&q=${food}`);
  const body = await response.json()
  console.log("response", body);
  res.json(body);
})
module.exports = router;