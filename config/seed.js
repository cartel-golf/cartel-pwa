require('dotenv').config({path: '../.env'});
var mongoose = require('mongoose');
var Player = require('../models/player');
var Cartel = require('../models/cartel');
var Course = require('../models/course');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL)
.then(() => 
  Promise.all([
    Player.remove({}),
    Cartel.remove({}),
    Course.remove({})
  ])
)
.then(() => {
  process.exit();
});