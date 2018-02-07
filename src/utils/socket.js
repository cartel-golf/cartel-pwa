import socketClient from 'socket.io-client';
import { websocketConnect, websocketDisconnect} from '../redux/actions/actionCreatorsSystem';
import store from '../redux/store';

const socket = socketClient(window.location.origin);

socket.on('connect', () => {
  store.dispatch(websocketConnect());
});

socket.on('disconnect', () => {
  store.dispatch(websocketDisconnect());
});

socket.on('message', (msg) => {
  console.log(msg);
});

export default socket;