import { access, writeFile, constants } from "node:fs/promises";

const create = async () => {
    const FILE_PATH = "./src/fs/files/fresh.txt";
    const FILE_CONTENT = "I am fresh and young";
    const EXIST_FILE_ERROR = "\x1b[31m"+ "FS operation failed" + "\x1b[0m";

    try {
        await access(FILE_PATH, constants.F_OK);
        throw new Error(EXIST_FILE_ERROR);
    } catch (err) {
        if (err.message === EXIST_FILE_ERROR) {
            throw err;
        }

        await writeFile(FILE_PATH, FILE_CONTENT);
    }
};

await create();
