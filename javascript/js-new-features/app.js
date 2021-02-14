// ********************************************
// default params
function rollDie(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}
console.log('roll d4: ' + rollDie(4));
console.log('roll default (d6): ' + rollDie());
