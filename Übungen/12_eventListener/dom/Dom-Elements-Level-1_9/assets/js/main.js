// Verbindung zu Farbe entfernen Button herstellen
const button = document.querySelector("#button");

const remover = (event) => {
  // reload der Seite vermeiden
  event.preventDefault();

  //   Den Index der ausgewählten Option ausgeben
  const colorSelection =
    document.querySelector("#farbeAuswahlen").selectedIndex;

  // Das Element (Die Farbe) hinter dem Index auswählen
  const selectedColor =
    document.querySelector("#farbeAuswahlen")[colorSelection];

  // Element löscjem
  selectedColor.remove();
};

// per klick auf den button wird die Funktion ausgelöst
button.addEventListener("click", remover);
