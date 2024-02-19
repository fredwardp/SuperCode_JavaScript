let list = [
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

const monatsName = (month) => {
  let justMonth = new Date(month);
  console.log(list[justMonth.getMonth()]);
};

monatsName("2001-3-4");
monatsName("2019-12-24");
monatsName("1410-07-15");
