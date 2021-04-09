const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Import routes
const postsRoute = require('./routes/posts');
const testsRoute = require('./routes/tests');

// middleware
// A function that executes when a route is hit
app.use(bodyParser.json());
app.use('/posts', postsRoute);
app.use('/tests', testsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('The home screen area');
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('connected to db')
);

// Listen to the server
app.listen(3000);