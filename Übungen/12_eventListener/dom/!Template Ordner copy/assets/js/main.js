// Verbindung zu Farbe entfernen Button herstellen
const button = document.querySelector("#button");

const bgColorSwitch = (event) => {
  // reload der Seite vermeiden
  event.preventDefault();

  //   Den Index der ausgewählten Option ausgeben
  const colorSelection =
    document.querySelector("#farbeAuswahlen").selectedIndex;

  // Das Element (Die Farbe) hinter dem Index auswählen
  const selectedColor =
    document.querySelector("#farbeAuswahlen")[colorSelection].innerText;
  console.log(selectedColor);
  if (selectedColor.includes(" ")) {
    const positionOfEmpty = selectedColor.indexOf(" ");

    const firstPart = selectedColor.slice(0, positionOfEmpty);

    const lastPart = selectedColor.slice(positionOfEmpty + 1);

    document.body.style.backgroundColor = firstPart + lastPart;
  } else {
    document.body.style.backgroundColor = selectedColor;
  }
};

// per klick auf den button wird die Funktion ausgelöst
button.addEventListener("click", bgColorSwitch);
