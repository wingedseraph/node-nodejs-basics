import { ERRORS } from "../utils/const.js";

export const cd = (path) => {
  try {
    process.chdir(path);
  } catch {
    console.error(ERRORS.OPERATION_FAILED);
  }
};
