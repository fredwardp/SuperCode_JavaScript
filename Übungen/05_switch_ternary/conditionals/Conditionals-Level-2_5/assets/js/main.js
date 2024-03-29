function check() {
  const bundeslandInfoErgebnis = document.querySelector(
    "#bundeslandInfoErgebnis"
  ).value;
  const informationen = document.querySelector("#informationen");

  switch (bundeslandInfoErgebnis) {
    case "Baden-Württemberg":
      informationen.textContent =
        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
      break;
    case "Bayern":
      informationen.textContent =
        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
      break;
    case "Berlin":
      informationen.textContent =
        "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
      break;
    case "Brandenburg":
      informationen.textContent =
        "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
      break;
    case "Bremen":
      informationen.textContent =
        "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
      break;
    case "Hamburg":
      informationen.textContent =
        "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
      break;
    case "Hessen":
      informationen.textContent =
        "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
      break;
    case "Mecklenburg-Vorpommern":
      informationen.textContent =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
      break;
    case "Niedersachsen":
      informationen.textContent =
        "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
      break;
    case "Nordrhein-Westfalen":
      informationen.textContent =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
      break;
    case "Rheinland-Pfalz":
      informationen.textContent =
        "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
      break;
    case "Saarland":
      informationen.textContent =
        "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
      break;
    case "Sachsen":
      informationen.textContent =
        "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
      break;
    case "Sachsen-Anhalt":
      informationen.textContent =
        "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
      break;
    case "Schleswig-Holstein":
      informationen.textContent =
        "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
      break;
    case "Thüringen":
      informationen.textContent =
        "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
      break;
  }
}
