import { readFile } from "node:fs/promises";
import { ERRORS } from "../utils/const.js";

export const cat = async (path) => {
  try {
    const data = await readFile(path, "utf8");
    console.log(data);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);

    throw new Error(ERRORS.OPERATION_FAILED);
  }
};
