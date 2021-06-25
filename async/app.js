const delayedColorChange = (color, delay, nextColor) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    // cool trick for null checks
    nextColor && nextColor();
  }, delay);
};

// callbacks
// wait for the first thing to finish, before second thing happens.
delayedColorChange('#81b29a', 1000, () => {
  delayedColorChange('#e07a5f', 1000, () => {
    delayedColorChange('#f2cc8f', 1000, () => {
      delayedColorChange('#3d405b', 1000, () => {
        delayedColorChange('#fdfcdc', 1000, () => {});
      });
    });
  });
});

// defining a promise
const dummyPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('connection timed out');
      } else {
        resolve(`data ${url}`);
      }
    }, delay);
  });
};

// promises
// chained promises
// dummyPromise('someapi.com/page1')
//   .then(() => {
//     console.log('page 1 recieved');
//     dummyPromise('someapi.com/page2')
//       .then(() => {
//         console.log('page 2 recieved');
//       })
//       .catch(() => {
//         console.log('error page 2');
//       });
//   })
//   .catch(() => {
//     console.log('error page 1');
//   });

// promises chained together with a single catch for all.
dummyPromise('someapi.com/page1')
  .then(() => {
    console.log('page 1 received');
    return dummyPromise('someapi.com/pag2');
  })
  .then(() => {
    console.log('page 2 received');
    return dummyPromise('someapi.com/page3');
  })
  .then(() => {
    console.log('page 3 received');
  })
  .catch(() => {
    console.log('error fetching page');
  });
