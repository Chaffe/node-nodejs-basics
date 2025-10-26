import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  const WORKER_PATHNAME = "./src/wt/worker.js";

  const START_VALUE = 10;
  const CPUCount = cpus().length;

  const promises = Array.from({ length: CPUCount })
    .map((_, index) => new Promise(
      (resolve) => {
        const worker = new Worker(WORKER_PATHNAME);

        worker.on('message', (data) => {
          resolve({ status: 'resolved', data });
          worker.terminate();
        });

        worker.on('error', () => {
          resolve({ status: 'error', data: null });
          worker.terminate();
        });

        worker.postMessage(START_VALUE + index);
      }
    ));

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
