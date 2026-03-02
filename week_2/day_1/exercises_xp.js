// const prompt = require("prompt-sync")();

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
  alert(`inside the funcThree function ${a}`);
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
funcFour();
funcFive();

//#4
let a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); //* outputs inside the funcSix function test

//#5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

//* 1st alert: "in the if block 5" (inner 'a' scoped to the block)
//* 2nd alert: "outside of the if block 2" (outer 'a' unchanged)
