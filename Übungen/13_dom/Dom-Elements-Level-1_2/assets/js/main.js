// console.log(bgClass.length);
const button = document.querySelector("button");
const bgClass = document.getElementsByClassName("example");

button.addEventListener("click", () => {
  for (i = 0; i <= bgClass.length; i++) {
    bgClass[i].classList.toggle("black");
  }
});
