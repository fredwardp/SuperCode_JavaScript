const selectInput = document.querySelector("select");

selectInput.addEventListener("change", () => {
  document.querySelector(
    "p"
  ).innerHTML = `Yo have selected option ${selectInput.value}`;
});
