const heros = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  null,
];

console.log(heros);

const myHeros = heros.filter(
  (noHero) => noHero !== undefined && noHero !== null
);

console.table(myHeros);
