import { open } from "node:fs/promises";

export const add = async (path) => {
  try {
    await open(path, "a");
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);

    throw new Error();
  }
};
