import { greet } from "../task_1/greeting.js";
import { printColoredMessage } from "../task_2/colorful-message.js";
import { readFile } from "../task_3/files/read-file.js";

// call the functions

const message = greet(readFile("../task_3/files/file-data.txt"));
printColoredMessage(message, "green");
