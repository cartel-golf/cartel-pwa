import socketClient from 'socket.io-client';
import { websocketConnect, websocketDisconnect} from '../actions/actionCreatorsSystem';
import store from '../store';

const socket = socketClient(process.env.SOCKET_URL);

socket.on('connect', () => {
  store.dispatch(websocketConnect());
});

socket.on('disconnect', () => {
  store.dispatch(websocketDisconnect());
});

export default socket;