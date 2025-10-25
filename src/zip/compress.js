import { createReadStream, createWriteStream } from "node:fs";
import { URL, fileURLToPath } from "node:url";
import process from "node:process";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";

const gzip = createGzip();

const filePathSource = fileURLToPath(
  new URL("./files/fileToCompress.txt", import.meta.url)
);
const filePathDestination = fileURLToPath(
  new URL("./files/archive.gz", import.meta.url)
);
const source = createReadStream(filePathSource);
const destination = createWriteStream(filePathDestination);

const compress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      process.exitCode = 1;
      throw new Error(err);
    }
  });
};

await compress();
