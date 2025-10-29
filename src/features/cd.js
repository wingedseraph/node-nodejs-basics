import { ERRORS } from "../utils/const.js";

export const cd = (path) => {
  try {
    process.chdir(path);
  } catch (err) {
    console.error(ERRORS.OPERATION_FAILED, err.message);
  }
};
