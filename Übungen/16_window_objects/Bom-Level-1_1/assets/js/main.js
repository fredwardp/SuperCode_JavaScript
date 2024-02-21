const timer = () => {
  console.log("Start: Warten für 3Sekunden");

  setTimeout(() => {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet");
  }, 3000);

  let startPoint = 10;

  let counter = setInterval(() => {
    console.log(startPoint);
    startPoint--;
    if (startPoint == 0) {
      console.log("Endlich Feierabend");
      clearInterval(counter);
    }
  }, 1000);
};

timer();
