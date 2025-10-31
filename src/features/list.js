import { readdir } from "node:fs/promises";

import { getFiletype } from "../utils/getFiletype.js";
import { getPath } from "../utils/getPath.js";

export const list = async (path = ".") => {
  try {
    const entries = await readdir(getPath(path), { withFileTypes: true });
    console.log(path);

    const results = getFiletype(entries);
    results.sort((a, b) => a.Type.localeCompare(b.Type));

    console.table(results);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);

    throw new Error();
  }
};
