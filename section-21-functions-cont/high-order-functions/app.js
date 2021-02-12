function rollTwice(rollDie) {
  rollDie();
  rollDie();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

rollTwice(rollDie);
