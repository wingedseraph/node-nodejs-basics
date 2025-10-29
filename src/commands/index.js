import { getPath } from "../utils/getPath.js";
import { listFiles } from "../features/list.js";

export const commands = {
  ".exit": async () => rl.close(),
  pwd: async () => null,
  cd: async (args) => {
    const [path] = args;
    console.log(":: cd ::", path);
  },
  up: async () => console.log(":: up ::"),
  ls: async (args) => {
    const [path] = args;
    const targetPath = getPath(path);
    await listFiles(targetPath);
  },
  cat: async (args) => console.log(":: cat ::", args),
};

export const getCommandList = async () => {
  return Object.entries(commands).map((e) => e[0]);
};
