const workOrNot = (datum) => {
  let date = new Date(datum);
  date.getDay();
  console.log(date.getDay());
  if (date.getDay() === 0 || date.getDay() === 6) {
    console.log("Weekend");
  } else {
    console.log("Workday");
  }
};

workOrNot("12.15.2019");
workOrNot("2.16.2001");
workOrNot("2.1.2020");
workOrNot("2.29.2020");
