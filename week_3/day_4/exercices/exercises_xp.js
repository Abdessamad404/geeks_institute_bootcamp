//! ===== Exercise 1 : Comparison =====

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

compareToTen(5)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

compareToTen(15)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

//! ===== Exercise 2 : Promises =====

const promise = new Promise(resolve => {
  setTimeout(() => resolve("succ"), 4000);
});

promise.then(msg => console.log(msg));

//! ===== Exercise 3 : Resolve & Reject =====

const resolveAfter3Seconds = new Promise(resolve => {
  setTimeout(() => resolve("resolved"), 3000);
});

resolveAfter3Seconds.then(msg => console.log(msg));

//! ===== Exercise 4 : Promise.all =====

const promise1 = new Promise(resolve => {
  setTimeout(() => resolve("Promise 1 resolved"), 2000);
});