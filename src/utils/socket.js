import socketClient from 'socket.io-client';
import * as actions from '../redux/actions/actionNames';
import { websocketConnect, websocketDisconnect} from '../redux/actions/actionCreatorsSystem';
import { updateConnectedPlayerIds, setPlayers } from '../redux/actions/actionCreatorsPlayers';
import store from '../redux/store';

const socket = socketClient(window.location.origin);

socket.on('connect', () => {
  store.dispatch(websocketConnect());
});

socket.on('disconnect', () => {
  store.dispatch(websocketDisconnect());
});

socket.on(actions.UPDATE_CONNECTED_PLAYER_IDS, (playerIds) => {
  store.dispatch(updateConnectedPlayerIds(playerIds));
});

socket.on(actions.SET_PLAYERS, (players) => {
  store.dispatch(setPlayers(players));
});

// This is a listener for development purposes
socket.on('message', (msg) => {
  console.log(msg);
});

export default socket;