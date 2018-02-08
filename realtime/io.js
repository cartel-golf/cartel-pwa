var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;
var messageNames = require('./message-names');
var Player = require('../models/player');

function getUser(token) {
  return new Promise(function(resolve, reject) {
    jwt.verify(token, SECRET, function (err, decoded) {
      if (err) return reject(`${err.message}\nToken: ${token}`);
      if (!decoded.user.active) return reject(`User is Not Active\nToken: ${token}`);
      return resolve(decoded.user);
    });
  });
}

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

module.exports = function(httpServer) {

  var io = require('socket.io')(httpServer);

  // Listen for new connections from clients (socket)
  io.on('connection', function (socket) {

    // Client app was just loaded or refreshed
    socket.on(messageNames.REGISTER_WITH_SERVER, async function({token}) {
      try {
        let user = await getUser(token);
        socket.user = user;
        socket.join(user.cartel, async () => {
          //TODO: START send ALL initial data back to client
          let players = await Player.findByCartel(user.cartel);
          socket.emit('FETCHED_PLAYERS', players);
          // END TODO: send ALL initial data back to client
          // Send message to update playerState.connectedPlayerIds
          io.to(user.cartel).emit('UPDATE_CONNECTED_PLAYER_IDS', await getUserIdsInRoom(io, user.cartel));
        });
      } catch (e) {
        console.log(`Error in io.js:\n${e}`);
      }
    });
    
    socket.on('disconnect', async function() {
      if (socket.user) {
        io.to(socket.user.cartel).emit('UPDATE_CONNECTED_PLAYER_IDS', await getUserIdsInRoom(io, socket.user.cartel));
      }
    });

  });

};