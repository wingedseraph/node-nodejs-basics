import { access, constants } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

export const isFileExists = async (filePath) => {
  const result = await access(filePath, constants.F_OK)
    .then(() => true)
    .catch(() => false);
  return result;
};

export const getFilePath = (relativePath) =>
  fileURLToPath(new URL(relativePath, import.meta.url));
