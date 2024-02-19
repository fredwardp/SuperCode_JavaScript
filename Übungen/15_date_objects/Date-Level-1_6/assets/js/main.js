let date = new Date();

const englishTime = (time) => {
  let justHours = new Date(time);

  if (justHours.getHours() >= 12) {
    console.log("PM");
  } else if (justHours.getHours() <= 11) {
    console.log("AM");
  }
};

let date1 = new Date(1999, 10, 5, 15); //PM
let date2 = new Date();
let date3 = new Date(2019, 12, 3, 12); //PM
let date4 = new Date(2000, 1, 1, 11); //AM

englishTime(date1);
englishTime(date2);
englishTime(date3);
englishTime(date4);
