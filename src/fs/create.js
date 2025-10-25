import { writeFile } from "node:fs/promises";
import { isFileExists, getFilePath } from "../utils.js";
import { ERRORS } from "../const.js";

const filePath = getFilePath("./files/fresh.txt");
const content = "I am fresh and young";

const create = async () => {
  if (isFileExists(filePath)) {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  }

  await writeFile(filePath, content);
};

await create();
