import { readdir } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

import { ERRORS } from "../const.js";

const folderPath = fileURLToPath(new URL("./files/", import.meta.url));

const list = async () => {
  try {
    const files = await readdir(folderPath);
    for (const file of files) console.log(file);
  } catch (err) {
    throw new Error(ERRORS.FS_OPERATION_FAILED)
  }
};

await list();
