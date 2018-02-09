import * as actions from './actionNames';

export const websocketConnect = () => ({
  type: actions.WS_CONNECT
});

export const websocketDisconnect = () => ({
  type: actions.WS_DISCONNECT
});

export const registerWithServer = (callback) => ({
  type: actions.REGISTER_WITH_SERVER,
  meta: {
    socket: true,
    callback
  }
});
