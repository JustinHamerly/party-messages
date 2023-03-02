'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const pmSocket = io(process.env.server);
