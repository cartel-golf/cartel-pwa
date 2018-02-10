var Player = require('../models/player');

function getUserIdsInRoom(io, room) {
  return new Promise((resolve, reject) => {
    // clients method returns array of socket ids
    io.in(room).clients((err, clients) => {
      if (err) return reject(err);
      // get namespace object
      let ns = io.of('/');
      // ns.connected is a hash (key/value pairs) of sockets
      let ids = clients.map(client => ns.connected[client].user._id);
      // Return unique user ids only (allow users to connect with multiple devices)
      return resolve([...new Set(ids)]);
    });
  });
}

module.exports = {
  getUserIdsInRoom
};