import { getPath } from "../utils/getPath.js";

export const up = () => {
  try {
    const parentPath = getPath("..");

    process.chdir(parentPath);
  } catch (err) {
    if (err instanceof Error) throw err.message;

    throw new Error();
  }
};
