// // // const prompt = require("prompt-sync")();

// // //? Instructions
// // //? Analyse the code below, and predict what will be the value of a in all the following functions.
// // //? Write your prediction as comments in a js file. Explain your predictions.
// // //! ===== Exercise 1
// // // #1
// // function funcOne() {
// //   var a = 5;
// //   if (a > 1) {
// //     a = 3;
// //   }
// //   return a;
// // }
// // //* console.log(funcOne()); // 3

// // //#2
// // let a = 0;
// // function funcTwo() {
// //   a = 5;
// // }

// // function funcThree() {
// //   alert(`inside the funcThree function ${a}`);
// // }

// // // #2.1 - run in the console:
// // funcThree();
// // funcTwo();
// // funcThree();
// // //* #2.2 If 'a' were declared with const, funcTwo() would not be able to reassign it.
// // //* The program would crash before any output is printed.

// // // #3
// // function funcFour() {
// //   window.a = "hello";
// // }
// // function funcFive() {
// //   alert(`inside the funcFive function ${a}`);
// // }

// // // #3.1 - run in the console:
// // funcFour();
// // funcFive();

// // //#4
// // let a = 1;
// // function funcSix() {
// //   let a = "test";
// //   alert(`inside the funcSix function ${a}`);
// // }

// // // #4.1 - run in the console:
// // funcSix(); //* outputs inside the funcSix function test

// // //#5
// // let a = 2;
// // if (true) {
// //   let a = 5;
// //   alert(`in the if block ${a}`);
// // }
// // alert(`outside of the if block ${a}`);

// // //* 1st alert: "in the if block 5" (inner 'a' scoped to the block)
// // //* 2nd alert: "outside of the if block 2" (outer 'a' unchanged)

// // //! ===== Exercise 2
// // //? Using the code below:
// // function winBattle() {
// //   return true;
// // }
// // //? Transform the winBattle() function to an arrow function.
// // const winBattle = () => true;
// // //? Create a variable called experiencePoints.
// // let experiencePoints;
// // //? Using the winBattle() function, set the value of experiencePoints to 10.
// // experiencePoints = winBattle() ? 10 : 1;
// // //? Log experiencePoints to the console.
// // console.log(experiencePoints);

// // //! ===== Exercise 3 : Is it a string ?
// // //? Instructions
// // //? Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// // //? Check out the example below to see the expected output

// // const isString = value => typeof value === "string";

// // console.log(isString("hello")); //true
// // console.log(isString([1, 2, 4, 0])); //false

// // //! 🌟 Exercise 4 : Find the sum

// // //? Instructions
// // //? Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// // const sum = (a, b) => a + b;
// // console.log(sum(3, 5)); //8

// // //! 🌟 Exercise 5 : Kg and grams
// // //? Instructions
// // //? Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// // //? First, use function declaration and invoke it.
// // function kgToGrams(kg) {
// //   return kg * 1000;
// // }
// // //? Then, use function expression and invoke it.
// // const kgToGramsExpr = function (kg) {
// //   return kg * 1000;
// // };
// // //? Write in a one line comment, the difference between function declaration and function expression.
// // //* Function declaration is hoisted and can be called before its definition, while function expression is not hoisted and cannot be called before it is defined.
// // //? Finally, use a one line arrow function and invoke it.
// // const kgToGramsArrow = kg => kg * 1000;
// // console.log(kgToGramsArrow(2)); //2000

// // //! 🌟 Exercise 6 : Fortune teller
// // //? Instructions
// // //? Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// // //? The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
// // (function (children, partner, location, job) {
// //   console.log(
// //     `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`,
// //   );
// // })(2, "Jane", "New York", "Software Engineer");

//! 🌟 Exercise 7 : Welcome
//? Instructions
//? John has just signed in to your website and you want to welcome him.
//? Create a Navbar in your HTML file.
//? In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//? The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function (userName) {
  const navbar = document.querySelector(".navbar");
  const userDiv = document.createElement("div");
  userDiv.classList.add("user");
  userDiv.innerHTML = `<img src="https://randomuser.me/api/portraits/men/3.jpg" alt="user profile picture">
  <span> Mr. ${userName}</span>`;
  navbar.appendChild(userDiv);
})("John");
