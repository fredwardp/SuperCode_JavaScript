const buttonList = document.querySelectorAll("button");

buttonList[0].addEventListener("click", () => {
  document.querySelector("output").innerHTML =
    document.body.children[0].firstElementChild.innerText;
});
buttonList[1].addEventListener("click", () => {
  document.querySelector("output").innerHTML =
    document.body.children[0].lastElementChild.innerText;
});
buttonList[2].addEventListener("click", () => {
  document.querySelector("output").innerHTML =
    document.body.children[0].firstElementChild.nextElementSibling.innerText;
});
buttonList[3].addEventListener("click", () => {
  document.querySelector("output").innerHTML =
    document.body.children[0].lastElementChild.previousElementSibling.innerText;
});
