const prompt = require("prompt-sync")();

//! 🌟 Exercise 1 : Find the numbers divisible by 23
//* Write a function that returns an array of numbers that are divisible by 23, between 0 and 500.
//* Also, at the end, return the sum of all numbers that are divisible by 23.
function findDivisibleBy23() {
  const result = [];
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      result.push(i);
      sum += i;
    }
  }
  return `Outcome : ${result.join(" ")} \nSum : ${sum}`;
}
// // console.log(findDivisibleBy23());

//* Bonus: Add a parameter divisor to the function.
function findDivisibleBy23(divisor = 23) {
  const result = [];
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      result.push(i);
      sum += i;
    }
  }
  return `Outcome : ${result.join(" ")} \nSum : ${sum}`;
}

// // console.log(findDivisibleBy23(45));

//! 🌟 Exercise 2 : Shopping List
//* Add the stock and prices objects to your js file.
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};
const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList = ["banana", "orange", "apple"];

//* Create a function called myBill() that takes no parameters.
function myBill() {
  let total = 0;
  for (let i = 0; i < shoppingList.length; i++) {
    const item = shoppingList[i];
    if (item in stock) {
      const price = prices[item];
      total += price;
    }
  }
  return total;
}
// // console.log(myBill());

//! 🌟 Exercise 3 : What’s in my wallet
//* Determine whether or not you can afford the item.
//* Change will always be represented in the following order: quarters, dimes, nickels, pennies.
function changeEnough(itemPrice, amountOfChange) {
  const coinValues = [0.25, 0.1, 0.05, 0.01];
  let totalChange = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    totalChange += amountOfChange[i] * coinValues[i];
  }
  return totalChange >= itemPrice;
}
// // console.log(changeEnough(4.25, [25, 20, 5, 0])); // true

//! 🌟 Exercise 4 : Vacations costs
//* Let’s create functions that calculate your vacation’s costs:

function hotelCost() {
  let nights;
  do {
    nights = Number(
      prompt("How many nights do you want to stay in the hotel? "),
    );
  } while (isNaN(nights) || nights < 0);
  return nights * 140;
}
// // console.log(hotelCost());

//Define a function called planeRideCost().
//It should ask the user for their destination.
//If the user doesn’t answer or if the answer is not a string, ask again.
//The function should return a different price depending on the location.
//“London”: 183$
//“Paris” : 220$
//All other destination : 300$
//case of paris handle both capital and lower cases

function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your destination? ");
  } while (!destination || typeof destination !== "string");
  switch (destination.toLowerCase()) {
    case "london":
      return 183;
    case "paris":
      return 220;
    default:
      return 300;
  }
}
// // console.log(planeRideCost());

//Define a function called rentalCarCost().
//It should ask the user for the number of days they would like to rent the car.
//If the user doesn’t answer or if the answer is not a number, ask again.
//Calculate the cost to rent the car. The car costs $40 everyday.
//If the user rents a car for more than 10 days, they get a 5% discount.
//The function should return the total price of the car rental.
function rentalCarCost() {
  let days;
  do {
    days = Number(prompt("How many days would you like to rent the car? "));
  } while (isNaN(days) || days < 0);
  const discount = days > 10 ? 0.05 : 0;
  return days * 40 * (1 - discount);
}
// // console.log(rentalCarCost());

//Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
  const hotelCostValue = hotelCost();
  const planeRideCostValue = planeRideCost();
  const rentalCarCostValue = rentalCarCost();
  return `The car cost: $${rentalCarCostValue}, the hotel cost: $${hotelCostValue}, the plane tickets cost: $${planeRideCostValue}`;
}
// // console.log(totalVacationCost());

//! 🌟 Exercise 5 : Users
// check the exercise 5.html file for this exercise 👀

//! 🌟 Exercise 6 : Find the largest number
// check the exercise 6.html file for this exercise 👀

//! 🌟 Exercise 7 : Sum of arguments
// check the exercise 7.html file for this exercise 👀
