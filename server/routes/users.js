const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');



router.get('/', (req, res) => {
  users.getAllUsers().then(data => {
    console.log(data);
    res.json({users: data});
  })
});

router.post('/', (req,res)=>{
  console.log(req.body)
})

module.exports = router;