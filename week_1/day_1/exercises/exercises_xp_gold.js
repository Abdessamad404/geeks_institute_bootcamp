const prompt = require("prompt-sync")();

//? Exercise 1 : Divisible by three
//! ===== Ex 1
let numbers = [123, 8409, 100053, 333333333, 7];
//* Loop through the array above and determine whether or not each number is divisible by three. Each time you loop console.log true or false.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    // console.log(true);
  } else {
    // console.log(false);
  }
}

//? Exercise 2 : Attendance
//! ===== Ex 1
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};
//* Prompt the user for their name.
//* If the name is in the object, console.log the name of the country they come from.
//* If the name is not in the object, console.log "Hi! I'm a guest."
// let name = prompt("Please enter your name: ");
// if (name in guestList) {
//   //   console.log(`Hi! I'm from ${guestList[name]}.`);
// } else {
//   //   console.log("Hi! I'm a guest.");
// }

//? Exercise 3 : Playing With Numbers
//! ===== Ex 1
let age = [20, 5, 12, 43, 98, 55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.

// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.
let sum = 0;
let highestAge = age[0];
for (let i = 0; i < age.length; i++) {
  sum += age[i];
  if (age[i] > highestAge) {
    highestAge = age[i];
  }
}
// console.log("The sum of all the numbers in the age array:", sum);
// console.log("The highest age in the array:", highestAge);
