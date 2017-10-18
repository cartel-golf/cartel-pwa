var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database');

var app = express();

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// api routes
app.use('/api', require('./routes/api'));

// catch all route for all non-api requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
var port = process.env.PORT || 3001;

var server = app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});

// load socket.io
require('./realtime/io')(server);

module.exports = app;
