import { readFile } from "node:fs/promises";

const read = async () => {
    const FILE_PATHNAME = "./src/fs/files/fileToRead.txt";
    const NON_EXIST_FILE_ERROR = "\x1b[31m"+ "FS operation failed" + "\x1b[0m";

    try {
        const fileContent = await readFile(FILE_PATHNAME);
        console.log(fileContent.toString());
    } catch (err) {
        if (err.code === "ENOENT") {
            throw new Error(NON_EXIST_FILE_ERROR);
        }
    }
};

await read();
