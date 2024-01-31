function berechnung(num) {
  const differenz = num - 27;

  if (differenz < 27) {
    const ergebnis = differenz * 2;
    console.log(ergebnis);
  } else {
    console.log("kleiner als 27");
  }
}

berechnung(123);
