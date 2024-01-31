// # ===== Comparison =====

// * = nutzen wir als Zuweisung

// * Das "==" & "===" benutzen wir zum vergleichen
// ? == vergleicht nur den Wert
// ? === vergleicht den Wert und den Datentypen

console.log(3 == 3); // true
console.log(3 == "3"); // true
console.log(3 == "hund"); // false
console.log(3 == 7); //false

console.log(3 === 3); //true
console.log(3 === "3"); //false

// ? "!=" fragt ob beide Werte nicht gleich sind
// ? "!==" fragt ob beide Werte und Datentypen nicht gleich

console.log(3 != 3); //false
console.log(3 !== 3); //false
console.log(4 !== 3); //true

//? > größer als
//? < kleiner als
//? >= größer gleich
//? <= kleiner gleich

console.log(3 > 2); //true
console.log(4 < 6); //true
console.log(4 >= 6); //false
console.log(4 >= 4); //true
console.log(1 >= 2); //false

console.log("B" > "A"); //true
console.log("B" > "a"); //false

//! ==== Elemente selektieren ====

//-   getElementById()
// Damit sprechen wir die Elemente über die id an
//id aus dem HTML: main-headline

const mainHeadline = document.getElementById("main-headline");
console.log(mainHeadline);

// So kann man auf die einzelnen Werte zugreifen
console.log(mainHeadline.innerText);

//  So kann ich andere Eigenschaften einsehen
console.log(mainHeadline.clientWidth + "px");

//- querySelector()
// Damir können wir alles ansprechen: ID's (#), klassen (.<text>) oder einfache Elemente (h2)

const mainText = document.querySelector(".main_text");
console.log(mainText);

const h1 = document.querySelector("h1");
console.log(h1);

//-  .innerHTML
//Wir können innerHTML auch verwenden um den Inhalt zu überschreiben
mainHeadline.innerHTML = "Zack - einfach sp über JS geändert 😎";

// mit = überschreiben wir den Wert
// mit += fügen wir zum alten Text hinzu
mainHeadline.innerHTML = "Und schon wieder geändert";
mainHeadline.innerHTML += " + etwas hinzugefügt";

// in Elemente schreiben
const divContainer = document.querySelector(".div_container");
divContainer.innerHTML = "<h2 class='new'>hallo</h2>";

// mit .style können wir das element stylen
mainHeadline.style.color = "red";

//  So ändere ich die Schriftgröße oder die Hintergrundfarbe
mainHeadline.style.fontSize = "70px";
divContainer.style.backgroundColor = "#9f9f9f";

// # ==== Funktionen =====

// * Deklarieren
// Wir erstellen eine Funktion und beschreiben was die Funktion machen soll
// mit dem Keyword "function" sgen wir JS, dass jetzt eine Funktion kommt
// "sayHi" (soll in camelCase geschrieben sein) ist der Name der Funktion. Der Name ist frei definierbar, sollte aber Sinn ergeben.
// () muss immer da sein

function sayHi() {
  console.log("hallooo");
}

//* Aufruf
// Wir müssen eine Funktion aufrufen, damit sie ausgeführt wird
//Später können wir Funktionen ausführen lassen, wenn wir z.B. auf einen Button klicken.
sayHi();

//! Funktionen mit Parametern
// Mit einem Parameter können wir unsere Funktion wiederverwenbarer machen

// - Einfache Parameter
//* Deklaration
//In den Klannern schreiben wir die Parameter und reichen sie an der Funktion weiter
//"name" ist sozusagen ein Platzhalter
function sayHiToAll(name) {
  console.log("Hallo " + name + " schön, dass du da bist");
}

sayHiToAll("Tobi");

// - Mehrere Parameter

function addMe(num1, num2) {
  console.log(num1 + num2);
}

addMe(5, 99);

// - Funktion ins HTML schreiben
// Version 1
function multiplyMe(num1, num2, num3) {
  let ergebnis = num1 + num2 + num3;
  console.log(ergebnis);
  divContainer.innerHTML += "<p>" + ergebnis + "</p>";
}

multiplyMe(2, 109, 12);

// Version 2
function multiplyMe2(num1, num2, num3) {
  divContainer.innerHTML += "<p>" + (num1 + num2 + num3) + "</p>";
}

multiplyMe2(2, 109, 12);
