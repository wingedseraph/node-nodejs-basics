import { createReadStream, createWriteStream } from "node:fs";
import { rm } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import { createBrotliCompress } from "node:zlib";

import { ERRORS } from "../utils/const.js";

export const compress = async (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    throw new Error(ERRORS.NO_ARGS);
  }

  console.log(oldPath, newPath);
  const source = createReadStream(oldPath);
  const destination = createWriteStream(newPath);
  const compressor = createBrotliCompress();

  try {
    await pipeline(source, compressor, destination);
    await rm(oldPath);
  } catch (err) {
    if (err instanceof Error) throw err.message;

    throw new Error();
  }
};
