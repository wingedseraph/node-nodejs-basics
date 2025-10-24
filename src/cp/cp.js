import { fork } from "node:child_process";
import { URL, fileURLToPath } from "node:url";

const fileSource = fileURLToPath(new URL("./files/script.js", import.meta.url));
const ERROR_MESSAGE = "child error";

const spawnChildProcess = async (args) => {
  const child = fork(fileSource, args);
  child.on("error", () => {
    throw new Error(ERROR_MESSAGE);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["e", "w"]);
