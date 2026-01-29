//? ====== Daily challenge: Not Bad
//* Write a JavaScript function that takes a string as input and checks if the word "not" appears before the word "bad". If "not" comes before "bad", replace the whole"not...bad" substring with "good" and return the modified string.
//* If "not" does not come before "bad", return the original string.
function notBad(str) {
  const notIndex = str.indexOf("not");
  const badIndex = str.indexOf("bad");
  if (notIndex !== -1 && badIndex !== -1 && notIndex < badIndex) {
    return str.slice(0, notIndex) + "good" + str.slice(badIndex + 3);
  } else {
    return str;
  }
}

// // console.log(notBad("This movie is not so bad")); // Output: "This movie is good"

//? Daily challenge: Stars
//* Write a JavaScript function that takes a positive integer n as input and prints a right-angled triangle of stars with n rows.
// method 1
function printStars(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}
// // printStars(5);

// method 2 : nested loops
function printStarsAlternative(n) {
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
// // printStarsAlternative(10);
