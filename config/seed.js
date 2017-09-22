require('dotenv').config({path: '../.env'});
var mongoose = require('mongoose');
var Player = require('../models/player');
var Cartel = require('../models/cartel');
var Course = require('../models/course');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {
  useMongoClient: true
})
.then(() => 
  Promise.all([
    Player.remove({}),
    Cartel.remove({}),
    Course.remove({})
  ])
)
.then(() => {
  let c = new Course({
    longName: 'South Hills Country Club',
    shortName: 'SHCC'
  });
  c.holes.push(
    { num: 1, par: 4, hcp: 7},
    { num: 2, par: 4, hcp: 3},
    { num: 3, par: 3, hcp: 17},
    { num: 4, par: 5, hcp: 11},
    { num: 5, par: 3, hcp: 13},
    { num: 6, par: 5, hcp: 9},
    { num: 7, par: 4, hcp: 15},
    { num: 8, par: 5, hcp: 5},
    { num: 9, par: 4, hcp: 1},
    { num: 10, par: 3, hcp: 18},
    { num: 11, par: 4, hcp: 12},
    { num: 12, par: 4, hcp: 2},
    { num: 13, par: 4, hcp: 14},
    { num: 14, par: 5, hcp: 6},
    { num: 15, par: 3, hcp: 8},
    { num: 16, par: 4, hcp: 4},
    { num: 17, par: 3, hcp: 16},
    { num: 18, par: 5, hcp: 10}
  );
  return c.save();
})
.then(course => {
  return Cartel.create({
    name: 'The Original Cartel',
    defaults: { course: course._id }
  });
})
.then(cartel => {
  return Player.create({
    screenName: 'Clarkie',
    cartelId: cartel._id,
    isBoss: true
  });
})
.then(player => {
  console.log(player);
})
.then(() => {
  process.exit();
});