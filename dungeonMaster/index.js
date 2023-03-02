'use strict';

require('dotenv').config();

const io = require('socket.io-client');
const { emitDiceCheck } = require('./handlers');

const dmSocket = io(process.env.SERVER);

dmSocket.on('resolve-roll', payload=>{
  console.log('<-------------------->')
  console.log(`Resolved ${payload.request.member}'s dc ${payload.request.check} ${payload.request.ability} roll`);
  console.log(`Results: Roll ${payload.result.result}`)
  payload.result.success ? console.log('Success! ') : console.log('Fail!');
  payload.result.critFail ? console.log('Critical Failure!') : '';
  payload.result.critSuccess ? console.log('Critical Success!') : '';
  console.log('<-------------------->')
})


setInterval(() => emitDiceCheck(dmSocket), 3000);
