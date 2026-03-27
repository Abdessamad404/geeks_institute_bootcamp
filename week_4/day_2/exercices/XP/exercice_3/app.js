//? Use the imported functions to read the content of the “Hello World.txt” text file

const { readFile, writeFile } = require("./fileManager");

const filePath = "./Hello World.txt";
const content = readFile(filePath);
console.log(content); // "Hello World"

writeFile("./Bye World.txt", " Bye World !!");

const filePath2 = "./Bye World.txt";
const content2 = readFile(filePath2);
console.log(content2); // " Bye World"
