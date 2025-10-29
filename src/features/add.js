import { open } from "node:fs/promises";
import { ERRORS } from "../utils/const.js";

export const add = async (path) => {
  try {
    await open(path, "a");
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);

    throw new Error(ERRORS.OPERATION_FAILED);
  }
};
