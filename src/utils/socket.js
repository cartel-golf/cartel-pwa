import socketClient from 'socket.io-client';

const socket = socketClient(process.env.SOCKET_URL);

socket.on('connect', () => {console.log('connected to server socket.io')});

export default socket;