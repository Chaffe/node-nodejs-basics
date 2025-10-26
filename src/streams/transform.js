import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const reversedTransform = new Transform({
    transform(chunk, encoding, callback) {
      const chunkValue = chunk.toString().trim();
      const reversedChunkValue = chunkValue.split('').reverse().join('');
      this.push(reversedChunkValue + '\n');
      callback();
    },
  });
  pipeline(process.stdin, reversedTransform, process.stdout);
};

await transform();
