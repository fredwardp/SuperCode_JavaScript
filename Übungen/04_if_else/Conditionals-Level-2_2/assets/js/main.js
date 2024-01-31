function airQuality() {
  const range = document.querySelector(".range").value;
  const background = document.querySelector("body");
  const label = document.querySelector("label");
  const firstH2 = document.querySelector(".concern");
  const secondH2 = document.querySelector(".effect");

  if (range < 55) {
    label.innerHTML = "Luftqualität: " + range;
    firstH2.innerHTML = "Level of health concern: good";
    secondH2.innerHTML = "Level of health effect: Little or no risk";
    background.style.backgroundColor = "#008200";
  } else if (range < 94) {
    label.innerHTML = "Luftqualität: " + range;
    firstH2.innerHTML = "Level of health concern: Moderate";
    secondH2.innerHTML = "Level of health effect: Acceptable quality";
    background.style.backgroundColor = "#FFF300";
  } else {
    label.innerHTML = "Luftqualität: " + range;
    firstH2.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups";
    secondH2.innerHTML =
      "Level of health effect: Generable publics not likley affected";
    background.style.backgroundColor = "#FFA500";
  }
}
