function ageCheck() {
  const form = document.querySelector("p");
  const input = document.querySelector("input:first-of-type").value;

  if (input >= 18) {
    console.log("Volljährig");
    form.innerHTML = "Volljährig";
  } else {
    console.log("minderjährig");
    form.innerHTML = "minderjährig";
  }
}
