function hierTrennen() {
  //
  const zeichenkette = document.querySelector("#zeichenkette").value;
  const trennenBei = document.querySelector("#trennen_bei").value;

  const davor = document.querySelector('input[name="radio"]:checked').value;

  const vordererTeil = document.querySelector(".vorderer_teil");
  const hintererTeil = document.querySelector(".hinterer_teil");

  const trennWert = zeichenkette.indexOf(trennenBei);

  const trennWertUndEins = trennWert + 1;

  if (davor == "1") {
    vordererTeil.textContent = zeichenkette.slice(0, trennWert);
    hintererTeil.textContent = zeichenkette.slice(trennWert, -1);
  } else {
    vordererTeil.textContent = zeichenkette.slice(0, trennWertUndEins);
    hintererTeil.textContent = zeichenkette.slice(trennWertUndEins, -1);
  }
}
