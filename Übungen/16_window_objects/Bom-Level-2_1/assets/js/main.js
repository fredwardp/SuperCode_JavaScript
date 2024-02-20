let allElements = document.querySelector(".message");
let outputNumber = document.querySelector("#count");
let countNumber = 10;
let counter = setInterval(() => {
  countNumber--;
  outputNumber.innerHTML = countNumber;
  if (countNumber == 0) {
    clearInterval(counter);
    allElements.style.opacity = 0;
  }
}, 1000);
