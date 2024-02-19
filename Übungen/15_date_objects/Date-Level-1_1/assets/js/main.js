let date1 = new Date();
let date2 = new Date("September 2, 2019 09:00:00");
let date3 = new Date(0);
let date4 = new Date(31556908800);
let date5 = new Date(86400000);

// for (let i = 1; i <= 5; i++) {
//   document.body.innerHTML += `${date i} = new Date(0)`;
// }

document.body.innerHTML += `<p> ${date1} = new Date() </p> <br>`;
document.body.innerHTML += `<p> ${date2} = new Date("September 2, 2019 09:00:00") </p> <br>`;
document.body.innerHTML += `<p> ${date3} = new Date(0) </p> <br>`;
document.body.innerHTML += `<p> ${date4} = new Date(31556908800) </p> <br>`;
document.body.innerHTML += `<p> ${date5} = new Date(86400000) </p> <br>`;

// document.body.innerHTML += `<p> ${date1} = ${date1.value} </p> <br>`;
