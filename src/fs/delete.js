import { rm } from "node:fs/promises";
import { ERRORS } from "../const.js";
import { getFilePath } from "../utils.js";

const fileSource = getFilePath("./files/fileToRemove.txt", import.meta.url);

const remove = async () => {
  rm(fileSource).catch(() => {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  });
};

await remove();
