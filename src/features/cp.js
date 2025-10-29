import { copyFile } from "node:fs/promises";

import { ERRORS } from "../utils/const.js";
import { isFileExists } from "../utils/isFileExists.js";

export const cp = async (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    throw new Error(ERRORS.OPERATION_FAILED);
  }

  const [isSourceExists, isDestinationExists] = await Promise.all([isFileExists(oldPath), isFileExists(newPath)]);

  if (!isSourceExists || isDestinationExists) {
    const err = isSourceExists ? (isDestinationExists ? ERRORS.DESTINATION_DOESNT_EXISTS : "") : ERRORS.SOURCE_DOESNT_EXISTS;
    throw new Error(err);
  }

  try {
    copyFile(oldPath, newPath);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);

    throw new Error(ERRORS.OPERATION_FAILED);
  }
};
