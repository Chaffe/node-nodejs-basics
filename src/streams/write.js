import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
  const FILE_PATHNAME = "./src/streams/files/fileToWrite.txt";

  const writableStream = createWriteStream(FILE_PATHNAME);
  stdin.pipe(writableStream);
};

await write();
