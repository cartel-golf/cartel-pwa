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

  io.on('connection', function (socket) {

    // Middleware to check auth
    socket.use((message, next) => {
      // Don't authenticate if disconnecting
      if (message[0] === 'disconnect') return next();
      // Verify token and attach user in token to socket each time - will have
      // to ensure that token is reissued if any player data changes...
      getUser(message[1].token)
      .then(user => {
        socket.user = user;
        next();
      })
      .catch(err => {
        // If REGISTER_WITH_SERVER and bad token - callback client with 'false'
        if (message[0] === messageNames.REGISTER_WITH_SERVER) {
          // Client's callback is last argument
          message[message.length - 1](false);
        }
        next(new Error('Socket IO ERROR: Client needs to provide credenitals'));
      });
    });

    // Client app was just loaded or refreshed
    socket.on(messageNames.REGISTER_WITH_SERVER, async function(token, cb) {
      // Successful registration - callback client with true
      cb(true);
      var user = socket.user;
      try {
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