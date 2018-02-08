var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;
var messageNames = require('./message-names');

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
  var socketIds = Object.keys(io.nsps['/'].adapter.rooms[room].sockets);
  var sockets = Object.values(io.nsps['/'].connected).filter(s => socketIds.includes(s.id));
  return sockets.map(s => s.user._id);
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
        //TODO: send ALL initial data back to client
        socket.emit('message', `user ${user.screenName} just registered`);
        //TODO: send online players update to others in cartel 
        io.to(socket.cartel).emit('UPDATE_CONNECTED_PLAYER_IDS', getUserIdsInRoom(io, user.cartel));
      } catch (e) {
        console.log(e);
      }
    });

    socket.on('action-event', function(data) {
      console.log('received message from user with the ' + socket.cartel + ' cartel','With this data:', data);
    });

    socket.on('disconnect', function() {
      console.log('a client disconnected')
    });


  });

};