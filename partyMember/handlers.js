'use strict';

const PartyMember = require('./lib/member')

const partyMember = new PartyMember()
partyMember.randomCharacter();

const receiveRequest = (payload, socket) => {
  console.log('Roll Request Received: ', payload.member);

  if(payload.member === partyMember.member){
    const result = partyMember.checkRoll(payload.ability, payload.check);
    console.log('Roll Resolved ', result);
    socket.emit('resolve-roll', {request: payload, result});
  };
}

module.exports = { receiveRequest };