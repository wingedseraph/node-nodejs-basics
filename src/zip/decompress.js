import { createReadStream, createWriteStream } from "node:fs";
import process from "node:process";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";

import { getFilePath } from "../utils.js";

const gzip = createUnzip();

const filePathSource = getFilePath("./files/archive.gz", import.meta.url);
const filePathDestination = getFilePath("./files/fileToCompress.txt", import.meta.url);

const source = createReadStream(filePathSource);
const destination = createWriteStream(filePathDestination);

const decompress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      process.exitCode = 1;
      throw new Error(err.message);
    }
  });
};

await decompress();
