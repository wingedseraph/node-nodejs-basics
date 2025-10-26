import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { ERRORS } from "../const.js";
import { getFilePath } from "../utils.js";

const filePath = getFilePath("./files/fileToRead.txt", import.meta.url);

const read = async () => {
  try {
    const fileContent = createReadStream(filePath);

    for await (const chunk of fileContent) {
      stdout.write(chunk);
    }

    console.log("\n\n==end==");
  } catch {
    throw new Error(ERRORS.STREAM_OPERATION_FAILED);
  }
};

await read();
