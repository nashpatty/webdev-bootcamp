const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = 'rgb(0, 108, 134)';
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
}

const paragraph = document.querySelector('p');

const heading = document.createElement('h1');
heading.append('Appended Text');
// this second version doesn't work cuz its not an object
// heading.appendChild('<h2>second text</h2>');

paragraph.prepend(heading);
