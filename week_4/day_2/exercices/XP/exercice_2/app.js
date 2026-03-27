//? In app.js, import the array of person objects from the data.js module.
const people = require("./data");

//? Write a function that calculates and prints the average age of all the persons in the array.
function calculateAverageAge(p) {
  const totalAge = p.reduce((total, person) => total + person.age, 0);
  const averageAge = totalAge / p.length;
  return averageAge;
}

console.log(calculateAverageAge(people)); //* outputs : 30
