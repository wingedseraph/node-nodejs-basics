import { open } from "node:fs/promises";

import { ERRORS } from "../utils/const.js";

export const add = async (path) => {
  try {
    await open(path, "a");
  } catch {
    console.error(ERRORS.OPERATION_FAILED);
  }
};
