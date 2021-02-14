// ********************************************
// forEach
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((num) => console.log(num));

const movies = [
  {
    title: 'bladerunner',
    score: 90,
  },
  {
    title: 'lord of the rings',
    score: 98,
  },
  {
    title: 'harry potter',
    score: 85,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} has a score of ${movie.score}`);
});

// ********************************************
// map
const doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles);

const movieTitles = movies.map(function (movie) {
  return movie.title;
});
console.log(movieTitles);

// ********************************************
// arrow functions
