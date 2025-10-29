import { mkdir as mkdir_ } from "node:fs/promises";

import { ERRORS } from "../utils/const.js";

export const mkdir = async (path) => {
  if (path === process.cwd()) {
    console.error(ERRORS.OPERATION_FAILED);
    return false;
  }

  try {
    await mkdir_(path);
  } catch (err) {
    console.error(ERRORS.OPERATION_FAILED, err.message);
  }
};
