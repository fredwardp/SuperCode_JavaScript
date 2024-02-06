function hierTrennen() {
  //
  const zeichenkette = document.querySelector("#zeichenkette").value;
  const trennenBei = document.querySelector("#trennen_bei").value;

  const davor = document.querySelector('input[name="radio"]:checked').value;

  const vordererTeil = document.querySelector(".vorderer_teil");
  const hintererTeil = document.querySelector(".hinterer_teil");

  const trennWert = zeichenkette.indexOf(trennenBei);

  const trennWertLänge = trennWert + trennenBei.length;
  console.log(trennWertLänge);

  if (davor == "davor") {
    vordererTeil.textContent = zeichenkette.slice(0, trennWert);
    hintererTeil.textContent = zeichenkette.slice(trennWert);
  } else {
    vordererTeil.textContent = zeichenkette.slice(0, trennWertLänge);
    hintererTeil.textContent = zeichenkette.slice(trennWertLänge);
  }
}
