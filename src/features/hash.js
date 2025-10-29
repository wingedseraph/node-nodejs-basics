import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

import { ERRORS } from "../utils/const.js";

export const hash = async (path) => {
  try {
    const fileContent = createReadStream(path);
    const hash = createHash("sha256");

    for await (const chunk of fileContent) {
      hash.update(chunk);
    }
    const hexHash = hash.digest("hex");

    console.log(hexHash);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);

    throw new Error(ERRORS.OPERATION_FAILED);
  }
};
