const name = `John Doe`; // string "", '', ``
const age = 30; // number
const bool = true; // boolean
let hobbies; // undefined
const user = null; // null

// let, const, var

// console.log(`My name is ${name} and I am ${age} years old.`); // template string - concatinating strings and variable
// console.log("here");
// console.log("My name is ${name} and I am ${age} years old.");
// console.log("here");
// console.log("my name is " + name + " and I am " + age + " years old.");

const car = {
  color: "yellow",
  model: "BMW",
  year: 2020,
};

// console.log(car.color); // this will print the color of the car
// console.log(car.model); // this will print the model of the car
// console.log(car.year); // this will print the year of the car

if (car.color === "black") {
  console.log("The car is black");
} else if (car.color === "red") {
  console.log("The car is red");
} else {
  console.log("The car has no color"); // run
}
