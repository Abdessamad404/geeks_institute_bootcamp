// ===== Exercise 1 : HTML Form (GET) =====
// When the form is submitted with GET, the data appears in the URL as query parameters.
// Example: index.html?name=John&message=Hello+World
// Anyone can see the data just by looking at the address bar.

// ===== Exercise 2 : HTML Form (POST) =====
// When the form is submitted with POST, the data is sent in the request body.
// It does NOT appear in the URL.
// To see it: DevTools (F12) > Network tab > click the request > "Payload" section.

// ===== Exercise 3 : JSON Mario =====

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// #1 - Convert JS object to JSON string
const marioJSON = JSON.stringify(marioGame);
console.log("Mario JSON:", marioJSON);
// Nested objects are preserved — JSON supports any depth of nesting.
// All keys become quoted strings, values keep their types (string, number).

// #2 - Pretty print JSON (indented with 2 spaces)
const marioPrettyJSON = JSON.stringify(marioGame, null, 2);
console.log("Mario Pretty JSON:", marioPrettyJSON);
// The second argument (null) means no key filtering.
// The third argument (2) sets the indentation level for readability.

// #3 - Add a breakpoint in DevTools to inspect values:
// Open DevTools (F12) > Sources tab > click this file > click the line number below.
debugger; // <-- execution pauses here when DevTools is open
console.log("marioJSON type:", typeof marioJSON); // "string"
console.log("marioGame type:", typeof marioGame); // "object"
