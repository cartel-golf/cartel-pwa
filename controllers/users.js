var createJWT = require('../utilities/jwt').createJWT;
var Player = require('../models/player');

function inviteSubmit(req, res) {
  Player.findOne({ inviteCode: req.body.inviteCode, active: true })
  .then(player => {
    if (player) return res.json({ token: createJWT(player) });
    res.status(403).json('invalid code entered');
  })
}

module.exports = {
  inviteSubmit,
};