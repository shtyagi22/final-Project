
const express = require('express');
const router = express.Router();
const posts = require('../db/queries/posts');
const multer = require('multer')


router.get('/', (req, res) => {
  posts.getAllPosts().then(data => {
    console.log(data);
    res.json({posts: data});
  })
});

router.post('/', (req,res)=>{
  console.log(req.body)
})


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname)
  }
})

const upload = multer({ storage: storage }).single('photo')

router.post('/', upload, (req,res)=>{
  console.log(req.file.path)
  console.log(req.body.text)
  return res.json({
    filepath:req.file.path,
    text:req.body.text
  })

})

module.exports = router;