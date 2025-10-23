import { URL, fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";

import { isFileExists } from "../utils.js";
import { ERRORS } from "../const.js";

const filePath = fileURLToPath(new URL("./files/fresh.txt", import.meta.url));
const content = "I am fresh and young";

const create = async () => {
  if (isFileExists(filePath)) {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  }

  await writeFile(filePath, content);
};

await create();
