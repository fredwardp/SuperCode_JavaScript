const text = "Sam is good at codingschool";

console.log(text.replace("good", "bad"));
let good = text.replace("good", "bad");
document.write(good + "<br>");

console.log(text.replace("coding", ""));
let coding = text.replace("coding", "");
document.write(coding + "<br>");

console.log(text.replace("codingschool", "tennis"));
let tennis = text.replace("codingschool", "tennis");
document.write(tennis + "<br>");
