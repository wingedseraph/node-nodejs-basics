import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { pipeline } from "node:stream/promises";
import { ERRORS } from "../const.js";
import { getFilePath } from "../utils.js";

const filePath = getFilePath("./files/fileToWrite.txt");

const write = async () => {
  try {
    await pipeline(stdin, createWriteStream(filePath));
  } catch {
    throw new Error(ERRORS.STREAM_OPERATION_FAILED);
  }
};

await write();
