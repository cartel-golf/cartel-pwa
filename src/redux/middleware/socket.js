import tokenService from '../../utils/tokenService';
import socket from '../../utils/socket';

/*
  Converts an action into a socket.io message and
  sends a data payload with the user's JWT merged
  with optional additional data.
*/
const socketMiddleware = store => next => action => {
  if (!action.meta || !action.meta.socket) return next(action);
  let token = tokenService.getToken();
  if (socket.connected && token) {
    let data = { token };
    if (action.payload) data.payload = action.payload;
    socket.emit(action.type, data);
  } 
};

export default socketMiddleware;