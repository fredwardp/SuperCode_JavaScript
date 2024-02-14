function loop() {
  let oSelector = document.querySelector("#textInput").value;
  let loopColor = document.querySelector("p");
  let loopText = document.querySelector("span");
  console.log(oSelector);

  let oRange = "";
  if (oSelector % 2 === 0 || oSelector === 1) {
    for (let i = 1; i < oSelector; i++) {
      loopColor.style.color = "green";
      oRange += "o";
    }
    loopText.innerHTML = oRange;
  } else {
    for (let i = 1; i <= oSelector / 2; i++) {
      loopColor.style.color = "green";
      oRange += "0o";
    }
    loopText.innerHTML = oRange;
  }
}
