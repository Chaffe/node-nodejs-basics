import { access, rm } from "node:fs/promises";

const remove = async () => {
    const PATHNAME = "./src/fs/files/fileToRemove.txt";
    const NON_EXIST_FILE_ERROR = "\x1b[31m"+ "FS operation failed" + "\x1b[0m";

    try {
        await access(PATHNAME);
        await rm(PATHNAME);
    } catch (err) {
        if (err.code === "ENOENT") {
            throw new Error(NON_EXIST_FILE_ERROR);
        }
    }
};

await remove();
