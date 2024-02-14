const imageArray = () => {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      returnArray.push(`image\_00${i}.jpg`);
    } else if (i < 100) {
      returnArray.push(`image\_0${i}.jpg`);
    } else {
      returnArray.push(`image\_${i}.jpg`);
    }
  }
  console.table(returnArray);
};

imageArray();
