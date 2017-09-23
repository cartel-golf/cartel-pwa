var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;
var Player = require('../models/player');

function inviteSubmit(req, res) {
  Player.findOne({inviteCode: req.body.inviteCode, active: true})
  .then(player => {
    if (player) return res.json({ token: createJWT(player) });
    res.status(403).json('invalid code entered');
  })
}

/*--- helper functions ---*/

function createJWT(player) {
  return jwt.sign(
    { user: player },
    SECRET
  );
}

module.exports = {
  inviteSubmit,
};