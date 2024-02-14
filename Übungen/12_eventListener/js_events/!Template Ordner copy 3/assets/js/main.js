const btn = document.querySelector("#clickMe");
// console.log(btn);
let anzahl = 0;

btn.addEventListener("click", () => {
  anzahl += 1;
  //   console.log(anzahl);
  btn.textContent = `Click me: ${anzahl}`;
});
