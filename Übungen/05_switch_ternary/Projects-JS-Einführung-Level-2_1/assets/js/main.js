function lastMessage() {
  const inputValue = document.querySelector("#message").value;
  const lastText = document.querySelector(".normal");
  const redText = document.querySelector(".red");

  if (inputValue.length > 0) {
    lastText.innerHTML = inputValue;
    redText.innerHTML = "";
  } else {
    redText.innerHTML = "Gib bitte eine Nachricht ein";
  }
}
