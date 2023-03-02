function PartyMember(){
  this.member = '';
  this.strength = 0;
  this.dexterity = 0;
  this.constitution = 0;
  this.intelligence = 0;
  this.wisdom = 0;
  this.charisma = 0;
}

PartyMember.prototype.randomCharacter = function(){
  const memberTypes = ['wizard', 'rogue', 'barbarian', 'bard', 'cleric'];
  const randomIdx = Math.floor(Math.random() * memberTypes.length)
  const stats = [];
  while (stats.length<6){
    let num = Math.floor(Math.random() * 4) - 1;
    stats.push(num);
  }
  this.strength = stats[0];
  this.dexterity = stats[1];
  this.constitution = stats[2];
  this.intelligence = stats[3];
  this.wisdom = stats[4];
  this.charisma = stats[5];
  this.member = memberTypes[randomIdx];
}

PartyMember.prototype.checkRoll = function(stat, dc){
  const roll = Math.floor(Math.random() * 20) + 1;
  const response = {
    success: false,
    critSuccess: false,
    critFail: false,
    result: 0
  }
  const total = roll + this[stat];
  response.result = total;
  if (total >= dc) response.success = true;
  if (roll === 20) response.critSuccess = true;
  if (roll === 1) response.critFail = true;
  return response;
}

module.exports = PartyMember;