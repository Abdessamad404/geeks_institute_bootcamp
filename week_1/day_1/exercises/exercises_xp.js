const prompt = require("prompt-sync")();

//? Exercise 1 : List of people
// Part I - Review about arrays
//! ===== Ex 1
const people = ["Greg", "Mary", "Devon", "James"];

//* Write code to remove “Greg” from the people array.
people.splice(0, 1);
// console.log("Remove Greg from the people array:", people);

//! ===== Ex 2
//* Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");
// console.log('Replace "James" with "Jason":', people);

//! ===== Ex 3
//* Write code to add your name to the end of the people array.
people.push("Abdessamad");
// console.log("Add your name to the end of the people array:", people);

//! ===== Ex 4
//* Write code that console.logs Mary’s index.
// console.log("Mary's index:", people.indexOf("Mary"));

//! ===== Ex 5
//* Write code to make a copy of the people array using the slice method.
//* The copy should NOT include “Mary” or your name.
const peopleCopy = people.slice(1, people.length - 1);
// console.log("Copy of the people array without Mary and my name:", peopleCopy);

//! ===== Ex 6
//* Write code that gives the index of “Foo”. Why does it return -1 ?
// console.log('Index of "Foo":', people.indexOf("Foo")); /// It returns -1 because "Foo" is not in the array.

//! ===== Ex 7
//* Create a variable called last which value is the last element of the array.
const last = people[people.length - 1];
// console.log("Last element of the people array:", last);

// Part II - Loops
//! ===== Ex 1
//* Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
  //   console.log(people[i]);
}

//! ===== Ex 2
//* Using a loop, iterate through the people array and exit the loop after console.log “Jason” .
for (let i = 0; i < people.length; i++) {
  //   console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

//? Exercise 2 : Your favorite colors
//! ===== Ex 1
//* Create an array called colors where the value is a list of your favorite colors.
const colors = ["Blue", "Black", "Grey"];

//! ===== Ex 2
//* Using a loop, iterate through the colors array and console.log each color.
for (let i = 0; i < colors.length; i++) {
  //   console.log(`My #${i + 1} favorite color is: ${colors[i]}`);
}

//? Exercise 3 : Repeat The Question
//! ===== Ex 1
//* Prompt the user for a number.
//* While the number is smaller than 10 continue asking the user for a new number.
// let userNumber = parseInt(prompt("Please enter a number: "));
// while (userNumber < 10 || isNaN(userNumber)) {
//   userNumber = parseInt(
//     prompt(
//       "The number is smaller than 10 or not even a number. Please enter a new number: ",
//     ),
//   );
// }
// console.log("Thank you! Your number is:", userNumber);

//? Exercise 4 : Building Management
const building = {
  numberOfFloors: 4,
  numberOfAptsByFloor: [4, 6, 12, 2],
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
building.numberOfFloors; //* Access the number of floors
//* Console.log how many apartments are on the floors 1 and 3.
const aptsFloor1And3 =
  building.numberOfAptsByFloor[0] + building.numberOfAptsByFloor[2];
// console.log("Number of apartments on floors 1 and 3:", aptsFloor1And3);

//* Console.log the name of the second tenant and the number of rooms he has in his apartment.
const nameOfTenant = building.nameOfTenants[1];
const numberOfRooms =
  building.numberOfRoomsAndRent[nameOfTenant.toLowerCase()][1];
// console.log(
//   `Name of the second tenant and the number of rooms he has in his apartment: ${nameOfTenant} has ${numberOfRooms} rooms.`,
// );

//* Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
const sarahRent = building.numberOfRoomsAndRent["sarah"][1];
const davidRent = building.numberOfRoomsAndRent["david"][1];
const danRent = building.numberOfRoomsAndRent["dan"][1];

if (sarahRent + davidRent > danRent) {
  console.log("The sum of Sarah's and David's rent is bigger than Dan's rent.");
  building.numberOfRoomsAndRent["dan"][1] = 1200;
  console.log(
    "Dan's rent has been updated to:",
    building.numberOfRoomsAndRent["dan"][1],
  );
}

//? Exercise 5 : Family
//! ===== Ex 1
//* Create an object called family with a few key value pairs.
const family = {
  father: "Ahmed",
  mother: "Sara",
  brother: "Ali",
  sister: "Nour",
};

//*   loop through the object and console.log the keys
// for (let member in family) {
//   console.log(`Family member key => value: ${member} => ${family[member]}`);
// }

//? Exercise 6 : Rudolf
const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

//! ===== Ex 1
//* Console.log “my name is Rudolf the raindeer” .
let sentence = "";
for (let key in details) {
  //   sentence += `key + " " + details[key] + " ";`
  sentence += `${key} ${details[key]} `;
}
// console.log(sentence);

//? Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
//! ===== Ex 1
//* Create a secret society name using the first letter of each person’s name
//* in the names array.
//* Console.log the name of the secret society.
let secretName = "";
for (let i = 0; i < names.length; i++) {
  secretName += names[i][0];
}
console.log(secretName); // outputs “ABJKPS”
