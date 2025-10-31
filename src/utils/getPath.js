import { resolve } from "node:path";

export const getPath = (path) => {
  if (!path) {
    return process.cwd();
  }

  return resolve(process.cwd(), path);
};
