function changeBackground() {
  const red = document.querySelector("#red").value;
  const green = document.querySelector("#green").value;
  const blue = document.querySelector("#blue").value;
  const background = document.querySelector("body");

  background.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}
