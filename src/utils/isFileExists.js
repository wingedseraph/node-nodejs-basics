import { access, constants } from "node:fs/promises";

export const isFileExists = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
