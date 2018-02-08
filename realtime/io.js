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

async function getPlayersForCartel(cartelId) {
  return await Player.find({cartel: cartelId});
}

function getUserIdsInRoom(io, room) {
  var socketIds = Object.keys(io.nsps['/'].adapter.rooms[room].sockets);
  var sockets = Object.values(io.nsps['/'].connected).filter(s => socketIds.includes(s.id));
  sockets = sockets.map(s => s.user._id);
  // Unique only (allow user to connect with multiple devices)
  return [...new Set(sockets)];
  return sockets;
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
        socket.join(user.cartel);
        //TODO: START send ALL initial data back to client
        let players = await getPlayersForCartel(user.cartel);
        socket.emit('FETCHED_PLAYERS', players);
        // END send ALL initial data back to client
        // Send message to update playerState.connectedPlayerIds
        io.to(user.cartel).emit('UPDATE_CONNECTED_PLAYER_IDS', getUserIdsInRoom(io, user.cartel));
      } catch (e) {
        console.log(`Error in io.js:\n${e}`);
      }
    });
    
    socket.on('action-event', function(data) {
      console.log('received message from user with the ' + socket.cartel + ' cartel','With this data:', data);
    });
    
    socket.on('disconnect', function() {
      if (socket.user) {
        io.to(socket.user.cartel).emit('UPDATE_CONNECTED_PLAYER_IDS', getUserIdsInRoom(io, socket.user.cartel));
      }
    });


  });

};