// // const prompt = require("prompt-sync")();

//! 1st daily challenge
//* Function 1: makeAllCaps
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    const allStrings = words.every(word => typeof word === "string");

    if (allStrings) {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all items in the array are strings.");
    }
  });
}

//* Function 2: sortWords
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sorted = words.sort();
      resolve(sorted);
    } else {
      reject("Error: Array length must be greater than 4.");
    }
  });
}

// Test the functions with a sample array of words
const wordsArray = ["elderberry", "apple", "banana", "cherry", "date"];

makeAllCaps(wordsArray)
  .then(uppercasedWords => {
    console.log("Uppercased Words:", uppercasedWords);
    return sortWords(uppercasedWords);
  })
  .then(sortedWords => {
    console.log("Sorted Words:", sortedWords);
  })
  .catch(error => {
    console.error(error);
  });

// Output:
// Uppercased Words: [ 'ELDERBERRY', 'APPLE', 'BANANA', 'CHERRY', 'DATE' ]
// Sorted Words: [ 'APPLE', 'BANANA', 'CHERRY', 'DATE', 'ELDERBERRY' ]

//! 2nd daily challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

//* Create three functions. The two first functions should return a promise..
function toJs(morseCode) {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morseCode);
      resolve(morseObj);
    } catch (error) {
      reject("Error: Invalid JSON string.");
    }
  });
}

const toMorse = morseJS => {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();

    const translation = [];

    for (let char of userInput) {
      if (char === " ") continue; // optional: skip spaces

      if (!morseJS[char]) {
        reject(`Character "${char}" doesn't exist in Morse`);
        return;
      }

      translation.push(morseJS[char]);
    }

    resolve(translation);
  });
};

const joinWords = morseTranslation => {
  const output = morseTranslation.join("\n");

  const outputTag = document.getElementById("output");

  outputTag.textContent = output;

  document.body.appendChild(outputTag);
};

toJs(morse)
  .then(toMorse)
  .then(joinWords)
  .catch(error => {
    console.error(error);
  });

// Output:
// Enter a word or sentence: hello
// .-...
// .-...
// .-...
// .-...
// .-...
