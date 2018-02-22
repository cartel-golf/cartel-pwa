var getUser = require('../utilities/jwt').getUser;
var messageNames = require('./message-names');
var Cartel = require('../models/cartel');
var Player = require('../models/player');
var rtPlayers = require('../realtime/players');

var io;

module.exports = {
  init,
  get
};

function get() {
  return io;
}

function init(httpServer) {

  io = require('socket.io')(httpServer);

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
          let allInitialData = await Promise.all([
            Cartel.findById(user.cartel).select('name defaultCourse').exec(),
            Player.findByCartel(user.cartel)
          ]);
          // Transform array into an object
          allInitialData = {
            cartel: allInitialData[0],
            players: allInitialData[1],
          };
          socket.emit(messageNames.SET_INITIAL_DATA, allInitialData);
          // Send message to update playerState.connectedPlayerIds
          io.to(user.cartel).emit('UPDATE_CONNECTED_PLAYER_IDS', await rtPlayers.getUserIdsInRoom(io, user.cartel));
        });
      } catch (e) {
        console.log(`Error in io.js:\n${e}`);
      }
    });
    
    socket.on('disconnect', async function() {
      if (socket.user) {
        io.to(socket.user.cartel).emit('UPDATE_CONNECTED_PLAYER_IDS', await rtPlayers.getUserIdsInRoom(io, socket.user.cartel));
      }
    });

  });

}