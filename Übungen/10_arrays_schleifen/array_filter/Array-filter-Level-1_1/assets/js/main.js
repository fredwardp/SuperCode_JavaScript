const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];

const animal = woerter.filter((singleAnimal) => {
  return singleAnimal.length <= 6;
});

console.table(animal);
