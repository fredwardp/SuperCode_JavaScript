// # Values auslesen

// Form = onSubmit
// Button => onClick

function getImputValue(event) {
  event.preventDefault(); // Verhindert das die Seite neu geladen wird

  // mit .value lesen wir die Daten vpn input aus
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const range = document.querySelector("#range").value;
  const check = document.querySelector("#check").checked;
  const bday = document.querySelector("#bday").value;
  //   console.log(name, age + "Jahre", range + "%", "Happy?:" + check, bday);

  const output = document.querySelector("h2");

  output.innerHTML =
    name + " " + age + " " + range + " " + check + " " + bday + " ";
}

// # Add, remove Toggle Klasse
// mit classList haben wir dei Möglichekit Klassen hinzuzufügen, abzuziehen oder zu toggeln

// * ADD
function addClass() {
  // class => .super-big

  const addClassH3 = document.querySelector("h3");

  // mit .add fügen wir die Klasse super-big hinzu
  addClassH3.classList.add("super-big");
}

// * Remove

function removeClass() {
  // class => .super_crazy
  const removeH4 = document.querySelector("h4");
  removeH4.classList.remove("super_crazy");
}

// * Toggle

function darkLight() {
  const darkToggle = document.querySelector("body");
  darkToggle.classList.toggle("dark_mode");
}
