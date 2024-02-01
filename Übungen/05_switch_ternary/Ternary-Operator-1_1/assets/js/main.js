// Die Funktion soll je nach Alterseingabe ausgeben, ob die Person minderjährig oder volljährig ist und dies auf der Seite anzeigen
function ageCheck() {
  const form = document.querySelector("p");
  const input = document.querySelector("input:first-of-type").value;
  console.log(input);

  const ternary = input <= 18 ? "under 18" : "over 18";
  form.textContent = ternary;
}
