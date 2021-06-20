const delayedColorChange = (color, delay, nextColor) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    // cool trick for null checks
    nextColor() && nextColor();
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
