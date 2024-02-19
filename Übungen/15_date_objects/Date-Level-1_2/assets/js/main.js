let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

let date = new Date();

document.body.innerHTML += `${date} <br>`;
document.body.innerHTML += `${date.getFullYear()} <br>`;
document.body.innerHTML += `${date.getMonth()} Monate <br>`;
document.body.innerHTML += `${date.getDate()} Tage <br>`;
document.body.innerHTML += `${date.getHours()} Stunden <br>`;
document.body.innerHTML += `${date.getMinutes()} Minuten <br>`;

wochenTag.forEach((tag) => {
  document.body.innerHTML +=
    date.toLocaleDateString("default", {
      weekday: "long",
    }) === tag
      ? `${tag} <br>`
      : "";
});

document.body.innerHTML += monate[date.getMonth()];
