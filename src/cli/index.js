import { createInterface } from "node:readline/promises";
import { styleText } from "node:util";
import { homedir } from "node:os";

import { getUsername, showIntroMessage, showOutroMessage } from "../utils/getUsername.js";
import { commands, getCommandList } from "../commands/index.js";
import { ERRORS } from "../utils/const.js";

export const printCWD = () => console.log(`You are currently in ${process.cwd()}`);

const username = getUsername();

const getSuccessPrompt = () => styleText("green", "Success > ");
const getFailurePrompt = () => styleText("red", "Invalid input > ");

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

      if (input === ".exit") {
        rl.close();
        return;
      }

      let operationSucceeded = true;
      const operation = commands[command];

      try {
        if (operation) {
          await operation(args);
        } else {
          operationSucceeded = false;
        }
      } catch (err) {
        console.error(ERRORS.OPERATION_FAILED, err.message);
        operationSucceeded = false;
      }

      if (operationSucceeded) {
        rl.setPrompt(getSuccessPrompt());
      } else {
        rl.setPrompt(getFailurePrompt());
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
