let divElement = document.querySelector(".zeit");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let number = 100;

  let interVallTimer = setInterval(() => {
    divElement.innerHTML = `${number}%`;
    number--;
    if (number < 0) {
      clearInterval(interVallTimer);
    }
  }, 1000);
});
