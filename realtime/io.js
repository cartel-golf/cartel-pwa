module.exports = function(httpServer) {

  var io = require('socket.io')(httpServer);

  // Listen for new connections from clients (socket)
  io.on('connection', function (socket) {

    console.log('client connected');
    /*
      Client starts up:
        1. Load invite key from local storage
        2. If no invite key
          2a. Show Submit Invite screen
          2b. When user submits invite code 
      

    */

    socket.on('startup', function(userId) {
      console.log('received a connect message from ', userId)
      socket.cartel = users[userId].cartel;
      socket.join(socket.cartel);
      io.to(socket.cartel).emit('message', 'test data');
    });

    socket.on('action-event', function(data) {
      console.log('received message from user with the ' + socket.cartel + ' cartel','With this data:', data);
    });

    socket.on('disconnect', function() {
      console.log('a client disconnected')
    });


  });

};