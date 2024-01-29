function getInputValue(event) {
  // verhinder das neuladen der Seite bei Klicken des submit buttons
  event.preventDefault();

  // verbindet und deklariert das Inputfeld alter1 als constante alter1
  const alter1 = document.querySelector("#alter1").value;

  // verbindet und deklariert das Inputfeld alter2 als constante alter2
  const alter2 = document.querySelector("#alter2").value;

  // verbindet mein p Element in meinem HTML mit meiner constanten ergebnis
  const ergebnis = document.querySelector("p");

  // fügt am Ende des Textes meines p Elements das Ergebnis aus alter1 - alter2 hinzu
  ergebnis.innerHTML += alter1 - alter2;
}
