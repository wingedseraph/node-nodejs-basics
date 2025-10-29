import { readdir } from "node:fs/promises";

import { ERRORS } from "../utils/const.js";
import { getFiletype } from "../utils/getFiletype.js";
import { getPath } from "../utils/getPath.js";

export const list = async (path = ".") => {
  try {
    const entries = await readdir(getPath(path), { withFileTypes: true });
    console.log(path);

    const results = getFiletype(entries);
    results.sort((a, b) => a.type.localeCompare(b.type));

    console.table(results);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);

    throw new Error(ERRORS.OPERATION_FAILED);
  }
};
