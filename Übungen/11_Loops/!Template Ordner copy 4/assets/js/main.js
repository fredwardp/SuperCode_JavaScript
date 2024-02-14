function loop() {
  let oSelector = document.querySelector("#textInput").value;
  let loopColor = document.querySelector("p");
  let loopText = document.querySelector("span");
  console.log(oSelector);

  let oRange = "";
  for (let i = 1; i < oSelector; i++) {
    loopColor.style.color = "green";
    oRange += "o";
  }
  loopText.innerHTML = oRange;
}
