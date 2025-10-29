import { createInterface } from "node:readline";
import { homedir } from "node:os";

import { getUsername, showIntroMessage, showOutroMessage } from "../utils/getUsername.js";
const username = getUsername();

const printCWD = () => console.log(`You are currently in ${process.cwd()}`);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

process.chdir(homedir());
showIntroMessage(username);
printCWD();
rl.prompt();

rl.on("line", (line) => {
  const input = line.trim();

  if (input === ".exit") {
    rl.close();
    return;
  }

  switch (input) {
    case "pwd":
      printCWD();
      break;
    case "cd":
      console.log(":: cd ::"); // use process.chdir
      break;
    case "up":
      console.log(":: up ::"); // use process.chdir
      break;
    case "ls":
      console.log(":: ls ::"); // use console.table
      break;
    case "cat":
      console.log(":: cat ::");
      break;

    default:
      console.error("Invalid input");
      break;
  }
  rl.prompt();
}).on("close", () => {
  showOutroMessage(username);
  process.exit(0);
});

rl.on("SIGINT", () => {
  rl.close();
});
