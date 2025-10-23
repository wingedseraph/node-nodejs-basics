import { cp } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

import { ERRORS } from "../const.js";

const fileSource = fileURLToPath(new URL("./files/", import.meta.url));
const filePathDestination = fileURLToPath(
  new URL("./files_copy/", import.meta.url)
);

const copy = async () => {
  cp(fileSource, filePathDestination, {
    recursive: true,
    errorOnExist: true,
    force: false,
  }).catch(() => {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  });
};

await copy();
