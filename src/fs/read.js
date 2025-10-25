import { readFile } from "node:fs/promises";
import { ERRORS } from "../const.js";
import { getFilePath } from "../utils.js";

const file = getFilePath("./files/fileToRead.txt");

const read = async () => {
  try {
    const data = await readFile(file, "utf8");
    console.log(data);
  } catch {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  }
};

await read();
