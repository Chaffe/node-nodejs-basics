import { readdir } from "node:fs/promises";

const list = async () => {
    const DIR_PATH = "./src/fs/files/";
    const NON_EXIST_DIR_ERROR = "\x1b[31m"+ "FS operation failed" + "\x1b[0m";

  try {
      const files = await readdir(DIR_PATH);
      console.table(files);
  } catch (err) {
      if (err.code === "ENOENT") {
          throw new Error(NON_EXIST_DIR_ERROR);
      }
  }
};

await list();
