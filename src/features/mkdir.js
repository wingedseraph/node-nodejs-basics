import { mkdir as mkdir_ } from "node:fs/promises";
import { ERRORS } from "../utils/const.js";

export const mkdir = async (path) => {
  if (path === process.cwd()) {
    throw new Error(ERRORS.NO_ARGS);
  }

  try {
    await mkdir_(path);
  } catch (err) {
    if (err instanceof Error) throw err;

    throw new Error();
  }
};
