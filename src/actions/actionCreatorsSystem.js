import * as actions from './actionNames';

export const websocketConnect = () => ({
  type: actions.WS_CONNECT
});

export const websocketDisconnect = () => ({
  type: actions.WS_DISCONNECT
});

