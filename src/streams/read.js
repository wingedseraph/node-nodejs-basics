import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { URL, fileURLToPath } from "node:url";

import { ERRORS } from "../const.js";

const filePath = fileURLToPath(
  new URL("./files/fileToRead.txt", import.meta.url)
);

const read = async () => {
  try {
    const fileContent = createReadStream(filePath);

    for await (const chunk of fileContent) {
      stdout.write(chunk);
    }
  } catch {
    throw new Error(ERRORS.STREAM_OPERATION_FAILED);
  }
};

await read();
