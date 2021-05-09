// passing functions into other functions
function callTwice(func) {
  func();
  func();
}

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);

// returning functions from other functions
// creating 'factory' functions
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(0, 18);
console.log(isChild(7));
