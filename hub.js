'use strict';

require('dotenv').config();

const { Server } = require('socket.io');

const server = new Server();

server.on('connection', socket => {
  console.log('Connected to server: ' + socket.id);
})

const party = server.of('/party');

party.on('connection', socket => {
  console.log('connected to Party server: ' + socket.id);
})

server.listen(process.env.PORT);
