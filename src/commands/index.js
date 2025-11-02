import { add, cat, cd, compress, cp, decompress, hash, list, mkdir, os, rn, up, mv } from "../features/index.js";
import { withPath } from "../utils/withPath.js";

export const commands = {
  "": async () => null,
  pwd: async () => null,
  cd: withPath(cd),
  ls: withPath(list),
  cat: withPath(cat),
  add: withPath(add),
  mkdir: withPath(mkdir),
  rn: withPath(rn),
  cp: withPath(cp),
  mv: withPath(mv),
  hash: withPath(hash),
  compress: withPath(compress),
  decompress: withPath(decompress),
  up: withPath(up),
  os: os,
};

export const getCommandList = async () => {
  return Object.keys(commands);
};
