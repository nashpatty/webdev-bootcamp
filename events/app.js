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
  return Math.floor(Math.random() * 255);
}

/**
 *
 * @returns rgb object, with red, green, blue values and a string represntation.
 */
function generateRgb() {
  let red = randomRgbValue();
  let green = randomRgbValue();
  let blue = randomRgbValue();
  let rgbString = `rgb(${red}, ${green}, ${blue})`;
  return {
    red: red,
    blue: blue,
    green: green,
    string: rgbString,
  };
}

// use a light font on darker backgrounds
// taken from this post: https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
function useLightFont(r, g, b) {
  return r * 0.299 + g * 0.587 + b * 0.114 <= 150;
}

const colorChangerBtn = document.querySelector('#change-color-btn');
const rgbDomText = document.querySelector('#rgb-value');
colorChangerBtn.addEventListener('click', () => {
  let rgb = generateRgb();
  document.body.style.backgroundColor = rgb.rgbString;
  rgbDomText.innerText = newColor;
  if (useLightFont(rgb.red, rgb.green, rgb.blue)) {
    document.body.style.color = 'white';
  } else {
    document.body.style.color = 'black';
  }
});

// button color changer
const colorBtns = document.querySelectorAll('#color-btns > button');

for (let btn of colorBtns) {
  btn.addEventListener('click', () => {
    let rgb = generateRgb();
    btn.style.backgroundColor = rgb.rgbString;
    if (useLightFont(rgb.red, rgb.green, rgb.blue)) {
      btn.style.color = 'white';
    } else {
      btn.style.color = 'black';
    }
  });
}
