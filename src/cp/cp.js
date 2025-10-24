import { fork } from "node:child_process";
import { URL, fileURLToPath } from "node:url";
import { ERRORS } from "../const.js";

const fileSource = fileURLToPath(new URL("./files/script.js", import.meta.url));

const spawnChildProcess = async (args) => {
  const child = fork(fileSource, args);
  child.on("error", () => {
    throw new Error(ERRORS.CP_OPERATION_FAILED);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["e", "w"]);
