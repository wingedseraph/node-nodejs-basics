import { copyFile } from "node:fs/promises";

import { isFileExists } from "../utils/isFileExists.js";
import { ERRORS } from "../utils/const.js";

export const cp = async (oldPath, newPath) => {
  const [isSourceExists, isDestinationExists] = await Promise.all([isFileExists(oldPath), isFileExists(newPath)]);

  if (!isSourceExists || isDestinationExists) {
    const err = isSourceExists ? (isDestinationExists ? ERRORS.DESTINATION_DOESNT_EXISTS : "") : ERRORS.SOURCE_DOESNT_EXISTS;
    console.error(ERRORS.OPERATION_FAILED, err);
    return false;
  }

  try {
    copyFile(oldPath, newPath);
  } catch (err) {
    console.error(ERRORS.OPERATION_FAILED, err.message);
  }
};
