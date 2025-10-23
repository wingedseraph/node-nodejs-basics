import { constants, access } from "node:fs/promises";

export const isFileExist = async (filePath) => {
  const result = await access(filePath, constants.F_OK)
    .then(() => true)
    .catch(() => false);
  return result;
};
