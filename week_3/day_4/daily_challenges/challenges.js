// Function 1: makeAllCaps
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

// Function 2: sortWords
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
