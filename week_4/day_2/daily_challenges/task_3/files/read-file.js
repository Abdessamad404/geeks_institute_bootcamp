// import fs using import
import fs from "fs";

// create a function in order to read the content from the file-data.txt file. Display the content in the terminal.

export function readFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  // console.log(content);
  return content;
}
