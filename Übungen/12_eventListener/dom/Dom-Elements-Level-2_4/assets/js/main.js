const button = document.querySelector("#button");

const bgColorSwitch = () => {
  const colorSelection =
    document.querySelector("#farbeAuswahlen").selectedIndex;

  const selectedColor =
    document.querySelector("#farbeAuswahlen")[colorSelection].innerText;
  const deleteSpace = selectedColor.replace(" ", "");
  document.body.style.backgroundColor = deleteSpace;
};

button.addEventListener("click", bgColorSwitch);
