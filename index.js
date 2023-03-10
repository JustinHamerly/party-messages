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

  socket.on('roll-request', payload => {
    console.log('ROLL REQUEST', payload)
    party.emit('roll-request', payload)
  })

  socket.on('resolve-roll', payload => {
    console.log('ROLL RESOLVED', payload)
    party.emit('resolve-roll', payload);
  })

})

server.listen(process.env.PORT);
