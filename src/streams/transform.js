import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

import { ERRORS } from "../const.js";

const reverseString = new Transform({
  transform(chunk, encoding, callback) {
    if (encoding !== "buffer") {
      this.emit("error", new Error(ERRORS.STREAM_OPERATION_FAILED));
      return callback();
    }
    this.push(String(chunk).split("").reverse().join(""));
    callback();
  },
});

const transform = async () => {
  try {
    await pipeline(stdin, reverseString, stdout);
  } catch {
    throw new Error(ERRORS.STREAM_OPERATION_FAILED);
  }
};

await transform();
