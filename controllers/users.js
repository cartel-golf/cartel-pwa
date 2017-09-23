var Player = require('../models/player');

function inviteSubmit(req, res) {
  console.log(res.body)
  res.json('Valid code entered');
  // res.status(400).json('invalid code entered');
}

module.exports = {
  inviteSubmit,
};