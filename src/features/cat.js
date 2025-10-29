import { readFile } from "node:fs/promises";

import { ERRORS } from "../utils/const.js";

export const cat = async (path) => {
  try {
    const data = await readFile(path, "utf8");
    console.log(data);
  } catch (err) {
    console.error(ERRORS.OPERATION_FAILED, err.message);
  }
};
