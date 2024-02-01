function checkPassword() {
  const password = document.querySelector("#password").value;
  const verification = document.querySelector(".green");
  const decline = document.querySelector(".red");

  const passwordConfirmation =
    password.length > 8
      ? "Welcome to your account"
      : "The passwort is to short";

  if (password.length > 8) {
    verification.style.color = "green";
  } else {
    verification.style.color = "red";
  }
  verification.textContent = passwordConfirmation;
}
