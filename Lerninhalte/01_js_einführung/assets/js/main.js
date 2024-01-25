// === console.log() ===
// mit console.log() können wir Sachen in der Konsole ausgeben lassen. Das werden wir viel zum Testen benutzen.
// Am Ende jedes Befehls muss ein Semikolon stehen.
console.log(50);

// ! === Variablen ===
// - const - Ist eine konstante Variable die nicht mehr verändert werden kann
// - let - Ist eine Variable die sich später noch verändern kann
// - var - wird nicht mehr benutzt

// ? CONST
// * -> stell dir vor, du möchtest eine Variable deklarieren, um den Namen einer person zu speichern. Wenn er einmal zugewiesen ist, soll er nichtmehr verändert werden klnnen: In diesem Fall wird const benutzt

const name = "Max";
// name = Tobi

// ? LET
// * Jetzt wollen wir ein Spielstand in einer Variable speichern und den Wert im Lauf des Spiels immer wieder anpassen. Wenn sich ein Wert im Lauf des Programms ändert benutzen wir let.

let score = 0;
console.log(score);
score = 11;
console.log(score);

// ? Zuweisung auf Aufruf
// let = Mit let erstellen wir eine Variable
// let num! 0 Hier initialisieren wir eine Variable und weise direkt einen Namen zu

let num1 = 33;
console.log("num1", num1);

// Variablen Namen sollen nicht zu lang oder zu kurz sein
// sollten nicht mit $ ode Zahlen anfangen
// sollten selbsterklärend sein

// JS ist Case_sensitive
// Case Sensitive heißt auf Groß- und Kleinschreibung achten

let a = 10;
let A = 50;

console.log(a);
console.log(A);

let zahl;

zahl = 55;

console.log(zahl);

// Best Practice
// camelCase: erster Buchstabe klein und zweite Wort groß

let meineErsteVariable;

let myFirstVariable;

// # ==== DatenTypen =====

// ? Numbers
// Numbers werden in der Konsole blau / lila angezeigt
console.log(10);
console.log(15.7375);
console.log("Tim" - "Max");
// Strings die mit - geschrieben werden, werden als mathematische Rechnung verstanden und verrechnet
console.log("50" - "25");
// Ein + gibt es auch in der String Welt (nicht nur in der Mathematik, so wie  das -), daher werden beide Strings zusammengeführt
console.log("50" + "25");

// ? Strings
// String = Textelemente und werden mit "" markiert
console.log("FranzWurst");
// Wir können auch Zahlen als String ausgeben
console.log("20");

// ? Booleans
console.log(true);
console.log(false);

// # String Concatenation
// Wir können mehrere Textelemente miteinander Verbinden

const firstName = "Michael";
const lastName = "Maiers";
let address = "Elmstreet";

console.log(firstName, lastName, address);
console.log(
  "Ich bin " + firstName + " " + lastName + " und hause in der " + address
);

let satz =
  "Ich bin " + firstName + " " + lastName + " und hause in der " + address;
console.log(satz);

// # ==== Arethmische Operationen =====

// addieren
console.log(5 + 3);
console.log("5" + "3");

// subtrahieren
console.log(5 - 8);

// multiplizieren
console.log(5 * 3);

// dividieren
console.log(5 / 3);

// Modulo Operator = Restwert
// wir schauen, ob es bei einem Restwert bleibtt, wenn wir z.B. die Zahl 9 durch 2 dividieren
console.log(6 % 3);

// Increment
// mit ++ wird immer eins zum vorherigen Wert hinzugefügt
let zahl1 = 10;
console.log("zahl1: ", zahl1);
zahl1++; // +1
console.log("zahl1", zahl1);
zahl1++; // +1
zahl1++; // +1
console.log("zahl1:", zahl1);

// Decrement
console.log("Zeile126", zahl1);
zahl1--; // -1
console.log("Zeile129", zahl1);
zahl1--, zahl1--, zahl1--; // -3
console.log(zahl1);

// # ==== Output ====

// console.log("kennen wir schon")

// ? document.write()
// Damit schreiben wir immer Daten ans Ende von dem HTML Dom
document.write("Hallo Kurs :)");

// so haben wir ein ummanteltes html Element hinzugefügt
document.write("<h2>Hallo Kurs :)</h2>");
document.write("<p class='test'> Was geht aaaaaaab </p>");

// ? window.alert()
// Damit öffnet sich ein Popup mit dem entsprechenden Text
// window.alert("Tach zam");

// # ==== Inputs ====

// ? window.prompt()
// Damit öffnet sich ein Popup bevor der Rest der Seite geladen ist, indem der User etwas eingeben kann
window.prompt("Bitte gib eine Zahl ein");

// Wenn ich den zweiten String nicht mit einem , trenne wird das in das input als Platzhalter gesetzt
window.prompt("Bitte gebe eine Zahl ein" + "Hallöchen");

// * Wir haben hier unsere Antwort in eine Variable geschrieben und speichern uns nun den Input vom User ab
let userAntwort = window.prompt("Wie lat bist du?");
console.log("Die Userantwort ist: " + userAntwort);

// ? window.confirm()
// Hiermit kriegt der User die Mögichkeit etwas zu akzeptieren oder abzulehnen
// window.confirm("Stimmen Sie den Cookies zu?");

// als Variabel:
let zustimmung = window.confirm("Stimmen Sie den Cookies zu?");
console.log(zustimmung);
