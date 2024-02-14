const grey = document.querySelector("#grauTaste");
const white = document.querySelector("#weissTaste");
const blue = document.querySelector("#blauTaste");
const yellow = document.querySelector("#gelbTaste");

grey.addEventListener("click", () => {
  document.body.style.backgroundColor = "grey";
});
white.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
yellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});
