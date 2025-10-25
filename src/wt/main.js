import { Worker, isMainThread } from "node:worker_threads";
import os from "node:os";

import { ERRORS } from "../const.js";
import { getFilePath } from "../utils.js";

const workerPath = getFilePath("./worker.js", import.meta.url);
const NUM_WORKERS = os.cpus().length;
const INIT_N = 10;

function runWorker(n) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, {
      workerData: n,
    });
    worker.on("message", (result) => {
      resolve({ n, result });
    });
    worker.on("error", reject);
  });
}

const performCalculations = async () => {
  if (!isMainThread) {
    throw new Error(ERRORS.WORKER_OPERATION_FAILED);
  }
  const workerPromises = [];

  for (let i = 0; i < NUM_WORKERS; i++) {
    const n = INIT_N + i;

    workerPromises.push(runWorker(n));
  }

  const results = await Promise.all(workerPromises);

  console.log(results);
  return results;
};

await performCalculations();
