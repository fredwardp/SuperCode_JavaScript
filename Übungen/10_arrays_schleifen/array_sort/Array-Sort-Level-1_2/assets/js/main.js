let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

// languages.sort().reverse();
// console.table(languages);

const sortierung2 = (languages) => {
  return languages.sort().reverse();
};

const ergebnis = sortierung2(languages);

console.log(ergebnis);

let ergebnisEinfach = languages.sort().reverse();
console.log(ergebnisEinfach);
