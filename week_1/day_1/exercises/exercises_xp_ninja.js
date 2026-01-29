//? Exercise 1 : Checking the BMI
//! ===== Ex 1
//* Create two objects, each object should hold a person’s details. Here are the details:
//* Full Name
//* Age
//* Height (in cm)
//* Weight (in kg)
//* BMI = weight / (height/100 * height/100)
//* The object should also have a method to calculate the BMI (the BMI is different for each person).
const person1 = {
  fullName: "Alice Johnson",
  age: 30,
  height: 177,
  weight: 70,
  calculateBMI: function () {
    return this.weight / (this.height / 100) ** 2;
  },
};

const person2 = {
  fullName: "Bob Smith",
  age: 25,
  height: 170,
  weight: 60,
  calculateBMI: function () {
    return this.weight / (this.height / 100) ** 2;
  },
};

//* Outside of the objects, create a JS function that compares the BMI of both objects.
//* Display the name of the person who has the highest BMI together with the BMI.
function compareBMI(person1, person2) {
  const bmi1 = person1.calculateBMI();
  const bmi2 = person2.calculateBMI();
  if (bmi1 > bmi2) {
    console.log(`${person1.fullName} has a higher BMI of ${bmi1.toFixed(2)}`);
  } else if (bmi2 > bmi1) {
    console.log(`${person2.fullName} has a higher BMI of ${bmi2.toFixed(2)}`);
  } else {
    console.log(`Both have the same BMI of ${bmi1.toFixed(2)}`);
  }
}
compareBMI(person1, person2);

//? Exercise 2 : Grade Average
//! ===== Ex 1
//* Create a function that takes an array of grades as input and returns the average grade.
const gradesList = [
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
];

function findAvg(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  const avg = sum / gradesList.length;
  if (avg > 65) {
    console.log(`You passed with an average of ${avg}`);
  } else {
    console.log(`You failed with an average of ${avg}`);
  }
}

findAvg(gradesList);
