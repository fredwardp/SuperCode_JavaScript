// #  if / else

// conditional (Bedingung) sind in der Programmierung die Möglichkeit, bestimmte Code-Blöcke auf Basis einer Bedingung auszuführen oder auch überspringen zu lassen. Eine der Möglichkeiten ist "if" (wenn) und "else" (sonst)
// 2. switch
// 3. ternary operator

// * Grundsyntax
// if(hierdrin steht die Bedingung){
//  dieser Block wird ausgeführt wenn die Bedingung true ist
//} else{
// dieser Block wird ausgeführt wenn die Bedingung galse ist
//}

//- wir benötigen fpr eine Bedingung, in der Regel, fast immer einen vergleich (comparison)!!!
// Das Eergebnis eines Vergleichs ist immer ein Boolean (true || false)

let time = 9;
console.log(time >= 8);
false;

if (time >= 8) {
  console.log("Ich bin das if");
} else {
  console.log(" Ich bin das false");
}

let salary = 1600;

if (salary <= 1000) {
  console.log("Du verdienst wenig");
} else if (salary <= 1500) {
  console.log("Du verdienst gut");
} else if (salary <= 2000) {
  console.log("Du bist Spitzenverdiener");
} else if (salary <= 3000) {
  console.log("Gehalt to the moon");
} else if (salary <= 4000) {
  console.log("Gehalt nicht mehr messbar #Elon");
}

// ! logical operators
//  Es gibt zwei logical operators:
// && operator --> logisches und, hier müssen beide Bedinungnen true sein
// || operator --> logisches oder, hier muss nur eine der beiden Bedingungen true sein

let numOne = 5;
let numTwo = 7;

console.log(numOne === 5 && numTwo === 8); //false
console.log(numOne === 5 || numTwo === 8); //true

//

function checkAge() {
  // das Number(placeholder) ist eine type conversion und macht in diesem fall aus einem string eine number
  const userAge = Number(document.querySelector(".userage").value);

  if (userAge < 18) {
    console.log("Du kommst nicht rein");
  } else {
    console.log("willkommen im Club");
  }
}
