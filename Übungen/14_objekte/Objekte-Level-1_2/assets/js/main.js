let persons = {
  name: "freddy",
  age: 26,
  sagNameAlter: () => {
    alert(persons.name + persons.age);
    console.log(persons.name);
    console.log(persons.age);
  },
};

persons.sagNameAlter();
