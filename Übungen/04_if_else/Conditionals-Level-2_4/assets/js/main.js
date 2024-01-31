//* Aufgabenstellung:
// Schreibe eine Funktion mit zwei Parametern (Zahlen).
// Die Funktion soll die Summe dieser Zahlen berechnen.
// Wenn beide Parameter gleich sind, soll sie (Summe 5) ausgeben.

function conditionals(num1, num2) {
  const ergebnis = num1 + num2;

  if (num1 === num2) {
    console.log(5);
  } else {
    console.log(ergebnis);
  }
}

conditionals(2, 9);
