import tokenService from '../../utils/tokenService';
import socket from '../../utils/socket';

const socketMiddleware = store => next => action => {
  console.log('from socket middleware - socket:')
  console.dir(socket)
  console.log(`socket.connected: ${socket.connected}`)
  console.log(`socket.id: ${socket.id}`)
  if (!action.meta || !action.meta.socket) return next(action);
  let token = tokenService.getToken();
  if (socket.connected && token) {
    let data = { token };
    if (action.payload) data.payload = action.payload;
    socket.emit(action.type, data);
  } 
};

export default socketMiddleware;