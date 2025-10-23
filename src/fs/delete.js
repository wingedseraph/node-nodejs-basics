import { rm } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

import { ERRORS } from "../const.js";

const fileSource = fileURLToPath(
  new URL("./files/fileToRemove.txt", import.meta.url)
);

const remove = async () => {
  rm(fileSource).catch(() => {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  });
};

await remove();
