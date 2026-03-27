//! 🌟 Exercise 1
const products = require("./products");

// Create a function that takes a product name as a parameter and searches for the corresponding product object.
function findProduct(productName) {
  return (
    products.find(product => product.name === productName) ??
    "Product not found"
  );
}

// Call this function with different product names and print the details of the products.
console.log(findProduct("Laptop"));
console.log(findProduct("Books"));
