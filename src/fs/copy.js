import { cp } from "node:fs/promises";
import { ERRORS } from "../const.js";
import { getFilePath } from "../utils.js";

const fileSource = getFilePath("./files/", import.meta.url);
const filePathDestination = getFilePath("./files_copy/", import.meta.url);

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
