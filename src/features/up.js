import { ERRORS } from "../utils/const.js";
import { getPath } from "../utils/getPath.js";

export const up = () => {
  try {
    const parentPath = getPath("..");

    process.chdir(parentPath);
  } catch (err) {
    console.error(ERRORS.OPERATION_FAILED, err.message);
  }
};
