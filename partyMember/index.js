'use strict';

require('dotenv').config();
const io = require('socket.io-client');

const { receiveRequest } = require('./handlers');

const pmSocket = io(process.env.SERVER);

pmSocket.on('roll-request', payload=>{
  receiveRequest(payload, pmSocket);
})
