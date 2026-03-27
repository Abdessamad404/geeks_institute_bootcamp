const _ = require("lodash");
const { add, multiply } = require("./math");

console.log("Custom math module:");
console.log("add(5, 3):", add(5, 3));
console.log("multiply(4, 7):", multiply(4, 7));

console.log("\nLodash utilities:");
console.log("_.flatten([1, [2, [3]]]):", _.flatten(_.flatten([1, [2, [3]]])));
console.log("_.sum([1, 2, 3, 4, 5]):", _.sum([1, 2, 3, 4, 5]));
console.log("_.capitalize('hello world'):", _.capitalize("hello world"));
