const express = require('express');
const router = express.Router();
const posts = require('../db/queries/posts');
const multer = require('multer')

router.get('/:id', (req, res) => {
  console.log("req.params.id:", req.params.id)
  const userId = req.params.id;
  console.log("userId", userId)
  posts.getPostsbyUserId(userId)
    .then((data) => {
      console.log("data returned from getPostsbyUserId:", data)
      res.json(data);
    });
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage }).single('photo')

router.post('/', upload, (req, res) => {
  console.log("req.file.path", req.file.path)
  console.log("req.body.text", req.body.text)
  console.log("req.body.userId", req.body.userId)
  posts.createPosts(req.body.text, req.body.userId, req.file.path)
    .then(data => {
      console.log("data returned from createComments:", data)
    });
  res.json({
    filepath: req.file.path,
    text: req.body.text
  })
})

module.exports = router;