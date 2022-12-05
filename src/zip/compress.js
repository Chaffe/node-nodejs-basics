import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const srcPath = './src/zip/files/fileToCompress.txt';
    const targetPath = './src/zip/files/archive.gz';

    const handleStream = createReadStream(srcPath)
    handleStream
        .pipe(createGzip())
        .pipe(createWriteStream(targetPath))
};

await compress();