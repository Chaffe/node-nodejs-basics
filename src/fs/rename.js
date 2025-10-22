import { rename as fsRename, access } from "node:fs/promises";

const rename = async () => {
    const OLD_PATHNAME = "./src/fs/files/wrongFilename.txt";
    const NEW_PATHNAME = "./src/fs/files/properFilename.md";
    const NON_EXIST_FILE_ERROR = "\x1b[31m"+ "FS operation failed" + "\x1b[0m";

    try {
        await access(OLD_PATHNAME);
        await fsRename(OLD_PATHNAME, NEW_PATHNAME);
    } catch (err) {
        if (err.code === "ENOENT" || err.message === NON_EXIST_FILE_ERROR) {
            throw new Error(NON_EXIST_FILE_ERROR);
        }
    }
};

await rename();
