import { createInterface } from "node:readline/promises";
import { homedir } from "node:os";

import { getUsername, showIntroMessage, showOutroMessage } from "../utils/getUsername.js";
import { getPath } from "../utils/getPath.js";
import { listFiles } from "../features/list.js";

const username = getUsername();

const printCWD = () => console.log(`You are currently in ${process.cwd()}`);

async function startFileManager() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
  });

  process.chdir(homedir());
  showIntroMessage(username);
  printCWD();
  rl.prompt();

  rl.on("close", () => {
    showOutroMessage(username);
    process.exit(0);
  });

  try {
    for await (const line of rl) {
      const input = line.trim();
      const [command, ...args] = input.split(/\s+/);

      switch (command) {
        case ".exit":
          rl.close();
          break;
        case "pwd":
          printCWD();
          break;
        case "cd":
          console.log(":: cd ::"); // use process.chdir
          break;
        case "up":
          console.log(":: up ::");
          break;
        case "ls":
          const [path] = args;
          const targetPath = getPath(path);
          await listFiles(targetPath);

          break;
        case "cat":
          console.log(":: cat ::");
          break;
        default:
          console.error("Invalid input");
          break;
      }

      printCWD();
      rl.prompt();
    }
  } catch (error) {
    console.error(error.message);
    rl.close();
  }
}

startFileManager();
