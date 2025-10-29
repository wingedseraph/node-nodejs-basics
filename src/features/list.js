import { readdir } from "node:fs/promises";

import { getPath } from "../utils/getPath.js";
import { getFiletype } from "../utils/getFiletype.js";
import { ERRORS } from "../utils/const.js";

export const listFiles = async (path = ".") => {
  try {
    const entries = await readdir(getPath(path), { withFileTypes: true });
    console.log(path);

    const results = getFiletype(entries);
    results.sort((a, b) => a.type.localeCompare(b.type));

    console.table(results);
  } catch (err) {
    console.error(ERRORS.OPERATION_FAILED);
    console.log(err.message);
  }
};
