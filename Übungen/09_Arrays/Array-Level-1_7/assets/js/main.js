let person = ["männlich", "106kg", "187cm"];
let friends = ["dennis", "mathis", "jascha"];
let favoriteFood = ["sushi", "nudeln", "steak"];

console.log(person);
console.log(friends);
console.log(favoriteFood);

let blond = person.unshift("blond");
console.log(blond);
console.log(person);

let bmi = person.unshift("bmi:30");
console.log(bmi);
console.log(person);

let maxi = friends.unshift("maxi");
console.log(maxi);
console.log(friends);

let william = friends.unshift("william");
console.log(william);
console.log(friends);

let burger = favoriteFood.unshift("burger");
console.log(burger);
console.log(favoriteFood);

let pizza = favoriteFood.unshift("pizza");
console.log(pizza);
console.log(favoriteFood);
