/*--- systemState actions ---*/
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const REGISTER_WITH_SERVER = 'REGISTER_WITH_SERVER';
// All initial data will be sent by server after REGISTER_WITH_SERVER
// All relevant reducers will process as appropriate
export const SET_INITIAL_DATA = 'SET_INITIAL_DATA';

/*--- userState actions ---*/
export const NEW_USER_TOKEN_SET = 'NEW_USER_TOKEN_SET';

/*--- cartelState actions ---*/
export const SET_CARTEL = 'SET_CARTEL';

/*--- players actions ---*/
export const UPDATE_CONNECTED_PLAYER_IDS = 'UPDATE_CONNECTED_PLAYER_IDS';
export const SET_PLAYERS = 'SET_PLAYERS';

