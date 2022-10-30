const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');


const { request } = require('express');
const cors = require('cors');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors()) // CORS middleware useage
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
app.use('/posts', postsRouter);


const APP_id = "e7215228";
const APP_key = "2f5c8ccb5407391f803663f04d6a1671";

app.get('/api', (req, res) =>

  request.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=73760b73b3fd4ae1ac47f74ebd4ac47c&ingredients=apples,+flour,+sugar&number=2`, (error, response) => {
    res.send(JSON.parse(response.body));
  }
  )
  // const cats = ["smudge", "mama", "fritz"];
  // res.json(cats);

);

module.exports = app;
