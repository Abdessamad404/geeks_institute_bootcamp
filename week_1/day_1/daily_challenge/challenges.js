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

console.log(notBad("This movie is not so bad")); // Output: "This movie is good"
