const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send({ message: 'Hello World!' });
});

// /users

const usersRouter = require('./controllers/users');
app.use('/users', usersRouter);

module.exports = app;
