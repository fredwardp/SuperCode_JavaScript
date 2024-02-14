let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

getraenke.sort();

const myDrinks = (list) => {
  list.forEach((drink) => {
    // console.log(drink);
    return document.write(drink + "<br>");
  });
};

myDrinks(getraenke);
