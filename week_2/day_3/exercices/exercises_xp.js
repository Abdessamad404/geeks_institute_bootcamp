//! ===== Exercise 1 : Location =====
// Analyze the code below. What will be the output?
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`,
); //* I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//! ===== Exercise 2 : Display Student Info =====
//? Using the code , destructure the parameter inside the function and return a string as the example seen below:
function displayStudentInfo(objUser) {
  //destructuring
  const { first, last } = objUser;
  console.log(`Your full name is ${first} ${last}`);
}
displayStudentInfo({ first: "Elie", last: "Schoppik" }); //* Your full name is Elie Schoppik

//! ===== Exercise 3: User & id =====

//? Using methods taught in class, turn the users object into an array:
const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);
console.log(usersArray);

//? Modify the outcome of part 1, by multipling the user’s ID by 2.
const usersArrayMultiplied = usersArray.map(
  user => [user[0], user[1] * 2],
  //   console.log(user['user1']),
);
console.log(usersArrayMultiplied); //* [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


//! ===== Exercise 4:  Person class =====
//? Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); //* object

//! ===== Exercise 5 : Dog class =====
class Dog {
  constructor(name) {
    this.name = name;
  }
};
//? Analyze the options below. Which constructor will successfully extend the Dog class?
//* The right constructor: 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//! ===== Exercise 6 : Challenges =====
// [2] === [2] //* False
// {} === {} //* False

//? What is, for each object below, the value of the property number and why?
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); //* 4
console.log(object3.number); //* 4
console.log(object4.number); //* 5


//? Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
//? Create a class Mammal that extends from the Animal class. 
//? Inside the class, add a method called sound(). 
//? This method takes a parameter (the sound the animal makes), and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(animalSound) {
    return `Hi, I'm ${this.name}, I'm a ${this.type}, I'm ${this.color} & I go ${animalSound}`;
  }
}

const cat = new Mammal('Minouch', 'cat', 'black');
console.log(cat.sound('Meow')); //* Hi, I'm Minouch, I'm a cat, I'm black & I go Meow
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Mooooo')); //* Hi, I'm Lily, I'm a cow, I'm brown and white & I go Mooooo

