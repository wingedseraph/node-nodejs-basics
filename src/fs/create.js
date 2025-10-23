import { URL, fileURLToPath } from "node:url";
import { access, constants, writeFile } from "node:fs/promises";

const filePath = fileURLToPath(new URL("./files/fresh.txt", import.meta.url));

const create = async () => {
  const fileExists = await access(filePath, constants.F_OK)
    .then(() => true)
    .catch(() => false);

  if (fileExists) {
    console.error("FS operation failed");
    throw new Error("FS operation failed");
  }

  const content = "I am fresh and young";
  await writeFile(filePath, content);
};

await create();
