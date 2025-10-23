import { cp } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

import { ERRORS } from "../const.js";
import { isFileExists } from "../utils.js";

const isFileExists = fileURLToPath(new URL("./files/", import.meta.url));
const filePathDestination = fileURLToPath(
  new URL("./files_copy/", import.meta.url)
);

const copy = async () => {
  if (!isFileExists(isFileExists) || isFileExists(filePathDestination)) {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  }

  await cp(isFileExists, filePathDestination, { recursive: true });
};

await copy();
