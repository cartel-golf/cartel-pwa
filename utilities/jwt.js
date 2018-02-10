var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function createJWT(player) {
  return jwt.sign(
    { user: player },
    SECRET
  );
}

function getUser(token) {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, SECRET, function (err, decoded) {
      if (err) return reject(`${err.message}\nToken: ${token}`);
      if (!decoded.user.active) return reject(`User is Not Active\nToken: ${token}`);
      return resolve(decoded.user);
    });
  });
}

module.exports = {
  createJWT,
  getUser
}