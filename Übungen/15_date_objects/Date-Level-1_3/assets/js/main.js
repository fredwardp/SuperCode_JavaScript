let date = new Date();

// let newDate = new Date("Februar 24, 2123 15:42:38");
// console.log(newDate);

date.setDate(20);
date.setMonth(5);
date.setFullYear(2222);
document.body.innerHTML += `${date} <br>`;

date.setDate(24);
date.setMonth(2);
date.setFullYear(2123);
document.body.innerHTML += `${date} <br>`;

date.setDate(3);
document.body.innerHTML += `${date} <br>`;

let newDate = new Date();
newDate.setDate(newDate.getDate() + 30);
document.body.innerHTML += `${newDate} <br>`;
