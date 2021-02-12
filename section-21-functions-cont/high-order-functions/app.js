// passing functions as arguments
function rollTwice(rollDie) {
  rollDie();
  rollDie();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

rollTwice(rollDie);

// returning functions as values
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 5) {
    return function () {
      console.log(':)');
    };
  }
  return function () {
    console.log(':(');
  };
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

function isBetween(num) {
  return num >= 50 && num <= 100;
}
