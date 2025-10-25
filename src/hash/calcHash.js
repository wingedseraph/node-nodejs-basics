import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { ERRORS } from "../const.js";
import { getFilePath } from "../utils.js";

const filePath = getFilePath("./files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const fileContent = createReadStream(filePath);
    const hash = createHash("sha256");

    for await (const chunk of fileContent) {
      hash.update(chunk);
    }
    const hexHash = hash.digest("hex");

    console.log(hexHash);
  } catch {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  }
};

await calculateHash();
