'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const dmSocket = io(process.env.server);
