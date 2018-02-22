import socketClient from 'socket.io-client';
import * as actions from '../redux/actions/actionNames';
import { websocketConnect, websocketDisconnect } from '../redux/actions/actionCreatorsSystem';
import { setCartel } from '../redux/actions/actionCreatorsCartel';
import { updateConnectedPlayerIds, setPlayers } from '../redux/actions/actionCreatorsPlayers';
import store from '../redux/store';

// Connects to window.location by default
const socket = socketClient();

socket.on('connect', () => {
  store.dispatch(websocketConnect());
});

socket.on('disconnect', () => {
  store.dispatch(websocketDisconnect());
});

socket.on(actions.SET_INITIAL_DATA, (initialData) => {
  store.dispatch(setCartel(initialData.cartel));
  store.dispatch(setPlayers(initialData.players));
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