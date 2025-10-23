import { access, constants } from "node:fs/promises";

export const isFileExists = async (filePath) => {
  const result = await access(filePath, constants.F_OK)
    .then(() => true)
    .catch(() => false);
  return result;
};
