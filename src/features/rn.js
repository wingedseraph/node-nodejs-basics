import { rename as rename_ } from "node:fs/promises";

import { ERRORS } from "../utils/const.js";
import { isFileExists } from "../utils/isFileExists.js";

export const rn = async (oldPath, newPath) => {
  const [isSourceExists, isDestinationExists] = await Promise.all([isFileExists(oldPath), isFileExists(newPath)]);

  if (!isSourceExists || isDestinationExists) {
    const err = isSourceExists ? (isDestinationExists ? ERRORS.DESTINATION_ALREADY_EXISTS : "") : ERRORS.SOURCE_DOESNT_EXIST;
    throw new Error(err);
  }

  try {
    rename_(oldPath, newPath);
  } catch (err) {
    if (err instanceof Error) throw err;

    throw new Error();
  }
};
