function airQuality() {
  // Deklaration der Variablen und Verknüpfung mit dem HTML
  const range = Number(document.querySelector(".range").value);
  const background = document.querySelector("body");
  const label = document.querySelector("label");
  const firstH2 = document.querySelector(".concern");
  const secondH2 = document.querySelector(".effect");

  label.textContent = "Luftqualität: " + range;

  // Wenn die Range verändert wird, soll sich die Hintergrundfarbe des bodys ändern und die entsrprechenden Beschreibungstexte des Luftverschmutzungsgrades angezeigt werden
  if (range <= 50) {
    firstH2.innerHTML = "Level of health concern: good";
    secondH2.innerHTML = "Level of health effect: Little or no risk";
    background.style.backgroundColor = "#008200";
  } else if (range <= 100) {
    firstH2.innerHTML = "Level of health concern: Moderate";
    secondH2.innerHTML = "Level of health effect: Acceptable quality";
    background.style.backgroundColor = "#FFF300";
  } else if (range) {
    firstH2.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups";
    secondH2.innerHTML =
      "Level of health effect: Generable publics not likley affected";
    background.style.backgroundColor = "#FFA500";
  }
}
