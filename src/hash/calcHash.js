import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const FILE_PATHNAME = "./src/hash/files/fileToCalculateHashFor.txt";
  const NON_EXIST_FILE_ERROR = "\x1b[31m"+ "FS operation failed" + "\x1b[0m";

  const hash = createHash('sha256');

  hash.on('readable', () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString('hex'));
    }
  });

  try {
    const fileContent = await readFile(FILE_PATHNAME);
    hash.write(fileContent);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(NON_EXIST_FILE_ERROR);
    }
  }

  hash.end();
};

await calculateHash();
