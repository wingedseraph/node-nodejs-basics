import { rename as rename_node } from "node:fs/promises";
import { isFileExists, getFilePath } from "../utils.js";
import { ERRORS } from "../const.js";

const oldPath = getFilePath("./files/wrongFilename.txt");
const newPath = getFilePath("./files/properFilename.md");

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
