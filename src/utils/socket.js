import socketClient from 'socket.io-client';

const socket = socketClient(process.env.SOCKET_URL);

export default socket;