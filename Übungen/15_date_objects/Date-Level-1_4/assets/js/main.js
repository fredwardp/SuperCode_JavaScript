date = new Date();

const tageImMonat = (month, year) => {
  date.setFullYear(year, month, 0);
  console.log(date.getDate());
};

tageImMonat(1, 2016);
tageImMonat(2, 2016);
tageImMonat(2, 2017);
tageImMonat(12, 2017);
