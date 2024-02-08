let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map((grad) => {
  return ((grad - 32) / 1.8).toFixed();
});

console.table(celsius);
