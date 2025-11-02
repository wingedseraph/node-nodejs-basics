import os_ from "node:os";
import { ERRORS } from "../utils/const.js";

const OS_METHOD_MAP = {
  username: "userInfo",
  architecture: "arch",
};

const SPECIAL_HANDLERS = {
  EOL: (result) => console.log(JSON.stringify(result)),
  username: (result) => console.log(`username is ${result.username}`),
  cpus: (result) => {
    console.table(result.map((cpu) => ({ Model: cpu.model, "Clock rate (GHz)": cpu.speed / 1000 })));
    console.log(`Overall amount of CPUS: ${result.length}`);
  },
};

function getOsMethod(flag) {
  const key = flag.slice(2);
  const methodName = OS_METHOD_MAP[key] || key;
  const method = os_[methodName];

  if (!method && methodName !== "EOL") throw new Error(`${ERRORS.OS_ERROR} ${methodName}`);

  return { key, method, methodName };
}

function printResult(key, method) {
  const result = typeof method === "function" ? method() : method;

  if (SPECIAL_HANDLERS[key]) {
    SPECIAL_HANDLERS[key](result);
  } else if (Array.isArray(result) || (typeof result === "object" && result !== null)) {
    console.table(result);
  } else {
    console.log(`${key}: ${result}`);
  }
}

export const os = async (args) => {
  if (args.length !== 1 || !args[0].startsWith("--")) throw new Error(ERRORS.NO_ARGS);

  const { key, method, methodName } = getOsMethod(args[0]);
  printResult(key, method, methodName);
  return true;
};

