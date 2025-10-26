import { sep } from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";

import "./files/c.cjs";

const random = Math.random();

const unknownObject =
  random > 0.5
    ? await import("./files/a.json", {
        with: { type: "json" },
      })
    : await import("./files/b.json", {
        with: { type: "json" },
      });

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${import.meta.dirname}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
