import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
  const SRC_PATHNAME = "./src/zip/files/archive.gz";
  const DEST_PATHNAME = "./src/zip/files/fileToCompress.txt";

  pipeline(
    createReadStream(SRC_PATHNAME),
    createUnzip(),
    createWriteStream(DEST_PATHNAME),
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    },
  );
};

await decompress();
