import { createInterface } from "node:readline/promises";
import { homedir } from "node:os";

import { getUsername, showIntroMessage, showOutroMessage } from "../utils/getUsername.js";
import { commands, getCommandList } from "../commands/index.js";

export const printCWD = () => console.log(`You are currently in ${process.cwd()}`);

const username = getUsername();

async function startFileManager() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
    completer: async function (line) {
      const completions = await getCommandList();
      const hits = completions.filter((c) => c.startsWith(line));
      return [hits.length ? hits : completions, line];
    },
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

      const operation = commands[command];
      if (operation) {
        await operation(args);
      } else {
        console.error("Invalid input");
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
