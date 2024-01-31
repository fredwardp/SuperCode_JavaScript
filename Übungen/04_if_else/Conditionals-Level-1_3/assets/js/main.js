function greaterThan() {
  const form = document.querySelector("p");
  const input = document.querySelector("input:first-of-type").value;

  if (input >= 18) {
    form.innerHTML = "Du darfst Shisha rauchen";
  } else {
    form.innerHTML = "Du darfst keine Shisha rauchen";
  }
}
