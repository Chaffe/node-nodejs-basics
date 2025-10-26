import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
  const FILE_PATHNAME = "./src/streams/files/fileToRead.txt";

  const readableStream = createReadStream(FILE_PATHNAME);

  readableStream.on('data', (chunk) => {
    stdout.write(chunk);
  });

  readableStream.on('error', (err) => {
    console.error('Read error:', err);
  });

  readableStream.on('end', () => {
    console.log('\nThere will be no more data.');
  });
};

await read();
