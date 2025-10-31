import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";

import { ERRORS } from "../utils/const.js";
import { isFileExists } from "../utils/isFileExists.js";

export const cp = async (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    throw new Error(ERRORS.NO_ARGS);
  }

  const [isSourceExists, isDestinationExists] = await Promise.all([isFileExists(oldPath), isFileExists(newPath)]);

  if (!isSourceExists || isDestinationExists) {
    const err = isSourceExists ? (isDestinationExists ? ERRORS.DESTINATION_ALREADY_EXISTS : "") : ERRORS.SOURCE_DOESNT_EXIST;
    throw new Error(err);
  }
  const sourceStream = createReadStream(oldPath);
  const destinationStream = createWriteStream(newPath);

  try {
    await pipeline(sourceStream, destinationStream);
  } catch (err) {
    if (err instanceof Error) throw err.message;

    throw new Error();
  }
};
