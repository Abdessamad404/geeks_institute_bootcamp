import chalk from "chalk";

// create a function
export function printColoredMessage(message, color) {
  console.log(chalk[color](message));
}
