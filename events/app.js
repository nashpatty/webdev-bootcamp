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

const rblYell = document.querySelector('#rbl-yell');
// only prints yell
rblYell.onclick = rebel;
rblYell.onclick = yell;

// will print both rebel and yell
rblYell.addEventListener('click', rebel);
rblYell.addEventListener('click', yell);
