function getImputValue(event) {
  // verhindert das neuladen der Seite nach klicken des submit buttons
  event.preventDefault();

  // deklariert den Wert meiner Antwort im input feld meines HTML als constante
  const geburtsjahr = document.querySelector("#geburtsjahr").value;

  // stellt eine Verbindung zu meinem Form Element her, indem das Ergebnis der Rechnung erscheinen soll
  const form = document.querySelector("form");

  // sagt das 2024 durch den eingegebenen Wert gerechnet werden soll und das gibt das Ergbenis in meinem Form Feld aus
  form.innerHTML += 2024 - geburtsjahr;
}
