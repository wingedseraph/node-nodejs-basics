import { readFile } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

import { ERRORS } from "../const.js";

const file = fileURLToPath(new URL("./files/fileToRead.txt", import.meta.url));

const read = async () => {
  try {
    const data = await readFile(file, "utf8");
    console.log(data);
  } catch {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  }
};

await read();
