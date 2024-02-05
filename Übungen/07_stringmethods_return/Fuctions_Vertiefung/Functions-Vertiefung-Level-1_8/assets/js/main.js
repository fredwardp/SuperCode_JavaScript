const yearBorn = (parameter) => {
  return 2024 - parameter;
};

let alter = yearBorn(1997);
console.log(alter);

const vergleich = (parameter1, parameter2) => {
  differenz = parameter1 - parameter2;
  if (differenz >= 0) {
    console.log(differenz + " Jahre unterschied");
  } else {
    console.log(differenz - differenz * 2 + " Jahre unterschied");
  }
};

vergleich(alter, 22);
