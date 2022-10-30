var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commentsRouter = require('./routes/comments');

const { request } = require('express');
const cors = require('cors');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors()) // CORS middleware useage
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);

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
