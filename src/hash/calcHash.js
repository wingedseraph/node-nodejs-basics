import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { URL, fileURLToPath } from "node:url";

import { ERRORS } from "../const.js";

const filePath = fileURLToPath(
  new URL("./files/fileToCalculateHashFor.txt", import.meta.url)
);

const calculateHash = async () => {
  try {
    const fileContent = createReadStream(filePath);
    const hash = createHash("sha256");

    for await (const part of fileContent) {
      hash.update(part);
    }
    const hexHash = hash.digest("hex");

    console.log(hexHash);
  } catch {
    throw new Error(ERRORS.FS_OPERATION_FAILED);
  }
};

await calculateHash();
