import { list, cat, add, cd, mkdir, rn, cp, hash, compress, decompress, up } from "../features/index.js";
import { withPath } from "../utils/withPath.js";

export const commands = {
  "": async () => null,
  pwd: async () => null,
  cd: withPath(cd),
  up: async () => console.log(":: up ::"),
  ls: withPath(list),
  cat: withPath(cat),
  add: withPath(add),
  mkdir: withPath(mkdir),
  rn: withPath(rn),
  cp: withPath(cp),
  mv: withPath(rn),
  hash: withPath(hash),
  compress: withPath(compress),
  decompress: withPath(decompress),
  up: withPath(up),
};

export const getCommandList = async () => {
  return Object.entries(commands).map((e) => e[0]);
};
