import { readFile } from "node:fs/promises";

export const cat = async (path) => {
  try {
    const data = await readFile(path, "utf8");
    console.log(data);
  } catch (err) {
    if (err instanceof Error) throw err

    throw new Error();
  }
};
