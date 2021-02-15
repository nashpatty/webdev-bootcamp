/**
 * ********************************************
 * default params
 */
function rollDie(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}
console.log('roll d4: ' + rollDie(4));
console.log('roll default (d6): ' + rollDie());

/**
 * ********************************************
 * spread
 */
const numbers = [1, 2, 3, 4, 53, 342, 234, 112, 3455];

// this will return NaN because max() expects numbers as arguments
console.log(
  '🚀 ~ file: app.js ~ line 16 ~ Math.max(numbers):',
  Math.max(numbers)
);

// this will find the right max, with the spread syntax
// passes each element in the array as a separate arguments
console.log(
  '🔧 ¦ file: app.js ¦ line 16 ¦ Math.max(...numbers):',
  Math.max(Math.max(...numbers))
);

// combining using spread
const cats = ['nero', 'lyanna', 'milo', 'goku'];
const dogs = ['max', 'bobo'];

const catsAndDogs = [...cats, ...dogs];
console.log('🚀 ~ file: app.js ~ line 29 ~ catsAndDogs:', catsAndDogs);

// using spread on objects
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const newFeline = { ...feline, color: 'various' };
console.log('🚀 ~ file: app.js ~ line 37 ~ newFeline:', newFeline);
