const guessNumber = () => {
  let userGuess = Number(
    window.prompt("Schätzen Sie eine Nummer zwischen 1 und 10")
  );
  let numberGenerator = Math.round(Math.random() * 10);

  if (userGuess === numberGenerator) {
    console.log("Du hast richtig geraten!");
  } else {
    console.log("Leider falsch Geraten, Computer sagt nein.");
  }
};

guessNumber(5);
