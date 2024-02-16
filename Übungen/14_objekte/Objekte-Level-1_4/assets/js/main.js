let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(Object.values(unsereHaustiere[0].names));
console.log(Object.values(unsereHaustiere[1].names));

// unsereHaustiere[0].names[0] = "Wauwau";
// unsereHaustiere[0].names[1] = "Hundi";

// unsereHaustiere[0].names.splice(2);

unsereHaustiere[0].names = ["Wauwau", "hundi"];

console.log(unsereHaustiere[0].names);
