const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');
const postCommentsRouter = require('./routes/postComments');
const recipeRouter = require('./routes/recipe')
const ingredientsRouter = require('./routes/ingredients')




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
app.use('/postComments', postCommentsRouter);
app.use('/recipe', recipeRouter);
app.use('/ingredients', ingredientsRouter);


app.use(express.static('public'));
module.exports = app;
