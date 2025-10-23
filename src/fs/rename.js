import { rename as rename_node } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

import { isFileExists } from "../utils.js";
import { ERRORS } from "../const.js";

const oldPath = fileURLToPath(
  new URL("./files/wrongFilename.txt", import.meta.url)
);
const newPath = fileURLToPath(
  new URL("./files/properFilename.md", import.meta.url)
);

const rename = async () => {
  const isMarkdownFileExists = await isFileExists(newPath);

  if (!isMarkdownFileExists) {
    rename_node(oldPath, newPath).catch(() => {
      throw new Error(ERRORS.FS_OPERATION_FAILED);
    });
  } else {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  }
};

await rename();
