let text = "sam is going to school";

document.write(text.toUpperCase("sam is going to school") + "<br>");

document.write(text + "<br>");

// let firstLetter = text[0].toUpperCase() + text.slice(1);
// document.write(firstLetter + "<br>");

const capatalizeEachWord = (word) => {
  const cut = word.split(" ");

  for (i = 0; i < cut.length; i++) {
    cut[i] = cut[i][0].toUpperCase() + cut[i].slice(1);
  }
  return cut.join(" ");
};

document.write(capatalizeEachWord(text) + "<br>");

let first = text.slice(0, 3);
// console.log(first);
let middle = text.slice(4, 15);
// console.log(middle);
let last = text.slice(16);
// console.log(last);

// document.write(first + " " + middle.toUpperCase() + " " + last + "<br>");

document.write(
  text.slice(0, 3) +
    " " +
    text.slice(4, 15).toUpperCase() +
    " " +
    text.slice(16) +
    "<br>"
);

document.write(`${first.toUpperCase()} ${middle} ${last.toUpperCase()}`);
