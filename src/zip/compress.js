import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const SRC_PATHNAME = "./src/zip/files/fileToCompress.txt";
  const DEST_PATHNAME = "./src/zip/files/archive.gz";

  pipeline(
    createReadStream(SRC_PATHNAME),
    createGzip(),
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

await compress();
