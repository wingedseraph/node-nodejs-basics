import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { rm } from "node:fs/promises";

import { ERRORS } from "../utils/const.js";

export const decompress = async (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    return null;
  }

  const source = createReadStream(oldPath);
  const destination = createWriteStream(newPath);
  const compressor = createBrotliDecompress();

  try {
    await pipeline(source, compressor, destination);
    await rm(oldPath);
  } catch (err) {
    console.error(ERRORS.OPERATION_FAILED, err.message);
  }
};
