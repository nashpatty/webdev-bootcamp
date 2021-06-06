const btn2 = document.querySelector('#btn-2');

btn2.onclick = () => {
  alert('good job, you did it.');
};

// btn2.onmouseenter = () => {
//   console.log('you sure about this?');
// };

const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', () => {
  alert('event listener!');
});

function rebel() {
  console.log('rebel');
}
function yell() {
  console.log('yell');
}

// addEventListener vs onclick
const rblYell = document.querySelector('#rbl-yell');
// only prints yell
rblYell.onclick = rebel;
rblYell.onclick = yell;

// will print both rebel and yell
rblYell.addEventListener('click', rebel);
rblYell.addEventListener('click', yell);

/**
 * color changer
 */
function randomRgbValue() {
  return Math.floor(Math.random() * (255 - 0) + 0);
}

// use a light font on darker backgrounds
// taken from this post: https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
function useLightFont(r, g, b) {
  return r * 0.299 + g * 0.587 + b * 0.114 <= 150;
}

const colorChangerBtn = document.querySelector('#change-color-btn');
const rgbDomText = document.querySelector('#rgb-value');
colorChangerBtn.addEventListener('click', () => {
  let red = randomRgbValue();
  let green = randomRgbValue();
  let blue = randomRgbValue();
  let rgbString = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = rgbString;
  rgbDomText.innerText = rgbString;
  if (useLightFont(red, green, blue)) {
    document.body.style.color = 'white';
  } else {
    document.body.style.color = 'black';
  }
});
