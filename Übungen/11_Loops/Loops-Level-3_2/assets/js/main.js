let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    let result = numArr[i] % j;
    console.log(result);
    if (result === 0)
      document.querySelector("body").innerHTML += `${
        numArr[i]
      } is devideble by ${j}. The result is ${numArr[i] / j} <br>`;
  }
}
