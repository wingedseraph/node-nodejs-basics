import { getPath } from "../utils/getPath.js";

export function withPath(handler) {
  return async (args) => {
    const flatArgs = args.flat();
    const paths = flatArgs.map((arg) => getPath(arg));
    await handler(...paths);
  };
}
