let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// Arrow function that logs the 3 fruits using forEach
const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries();

// Arrow function that demonstrates pass by value vs pass by reference
const cloneGroceries = () => {
  // Pass by VALUE: user is a copy of the string "John"
  let user = client;

  // Changing client does NOT affect user — strings are primitives (pass by value)
  client = "Betty";
  console.log("client:", client); // "Betty"
  console.log("user:", user); // "John" — unchanged

  // Pass by REFERENCE: shopping points to the same object as groceries
  let shopping = groceries;

  // Changing totalPrice DOES affect groceries — objects are pass by reference
  shopping.totalPrice = "35$";
  console.log("groceries.totalPrice:", groceries.totalPrice); // "35$" — modified

  // Changing paid DOES affect groceries — same reason, nested object is still a reference
  shopping.other.paid = false;
  console.log("groceries.other.paid:", groceries.other.paid); // false — modified
};

cloneGroceries();
