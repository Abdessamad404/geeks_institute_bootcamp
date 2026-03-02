const prompt = require("prompt-sync")();

//? Instructions
//? Analyse the code below, and predict what will be the value of a in all the following functions.
//? Write your prediction as comments in a js file. Explain your predictions.
//! ===== Exercise 1
// #1
function funcOne() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  return a;
}
//* console.log(funcOne()); // 3

//#2
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  console.log(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree();
funcTwo();
funcThree();
//* #2.2 If 'a' were declared with const, funcTwo() would not be able to reassign it.
//* The program would crash before any output is printed.

// #3
function funcFour() {
  window.a = "hello";
}
function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()