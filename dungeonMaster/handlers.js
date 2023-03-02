'use strict'

const getRandom = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

const generateDiceTest = () => {
  const abilities = [
    'strength', 
    'dexterity', 
    'intelligence', 
    'wisdom', 
    'constitution', 
    'charisma'
  ];

  const members = [
    'cleric',
    'rogue',
    'wizard',
    'bard',
    'barbarian'
  ]

  const dc = [10, 11, 12, 13, 14, 15, 16, 17, 18];

  const ability = getRandom(abilities);
  const check = getRandom(dc);
  const member = getRandom(members)

  return { ability, check, member };
}

const emitDiceCheck = (socket) => {
  const roll = generateDiceTest();
  
  console.log(`Roll Request: ${roll.ability} ${roll.check} -> ${roll.member}`)

  socket.emit('roll-request', roll);
}

module.exports = { emitDiceCheck };
