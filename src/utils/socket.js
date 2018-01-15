import socketClient from 'socket.io-client';

const socket = socketClient(process.env.SOCKET_URL);

socket.on('connect', () => {console.log('connected to server socket.io')});

socket.on('message-from-server', function () { console.log('recieved message from server') });

export default socket;