import socket from 'socket.io-client';

export default socket(process.env.SOCKET_URL);