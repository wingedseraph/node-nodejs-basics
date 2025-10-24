import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { URL, fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

import { ERRORS } from "../const.js";

const filePath = fileURLToPath(
  new URL("./files/fileToWrite.txt", import.meta.url)
);

const write = async () => {
  try {
    await pipeline(stdin, createWriteStream(filePath));
  } catch {
    throw new Error(ERRORS.STREAM_OPERATION_FAILED);
  }
};

await write();
