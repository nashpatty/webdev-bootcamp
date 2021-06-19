const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

const resetButton = document.querySelector('#reset');

const playto = document.querySelector('#playto');

playto.addEventListener('change', () => {
  winningScore = playto.value;
});

let winningScore = playto.value;

p1Button.addEventListener('click', () => {
  p1Score++;
  if (p1Score < winningScore) {
    p1Display.textContent = `${p1Score}`;
  } else {
    p1Display.textContent = 'player 1 won';
    disableButtons();
  }
});

p2Button.addEventListener('click', () => {
  p2Score++;
  if (p2Score < winningScore) {
    p2Display.textContent = `${p2Score}`;
  } else {
    p2Display.textContent = 'player 2 won';
    disableButtons();
  }
});

resetButton.addEventListener('click', () => {
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = `${p1Score}`;
  p2Display.textContent = `${p2Score}`;

  enableButtons();
});

function enableButtons() {
  p1Button.disabled = false;
  p2Button.disabled = false;
}

function disableButtons() {
  p1Button.disabled = true;
  p2Button.disabled = true;
}

// function updatePlayerScore(playerScore, display) {
//   playerScore++;
//   if (playerScore < winningScore) {
//     display.textContent = `${playerScore}`;
//   } else {
//     display.textContent = 'player 1 won';
//   }
// }
