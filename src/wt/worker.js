import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on('message', (n) => {
    try {
      if (typeof n !== 'number' || n < 0) {
        throw new Error('Invalid number');
      }
      const result = nthFibonacci(n);
      parentPort.postMessage(result);
    } catch (error) {
      throw error;
    }
  });
};

sendResult();
