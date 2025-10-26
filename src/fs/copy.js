import { access, cp } from "node:fs/promises";

const copy = async () => {
  const SRC_PATH = "./src/fs/files/";
  const DEST_PATH = "./src/fs/files_copy/";
  const EXIST_DIR_ERROR = "\x1b[31m"+ "FS operation failed" + "\x1b[0m";

  try {
      await access(DEST_PATH);
      throw new Error(EXIST_DIR_ERROR);
  } catch (err) {
      if (err.message === EXIST_DIR_ERROR) {
          throw err;
      }
  }

  try {
      await cp(
          SRC_PATH,
          DEST_PATH,
          { errorOnExist: true, recursive: true },
      );
  } catch (err) {
      if (err.code === "ENOENT") {
          throw new Error(EXIST_DIR_ERROR);
      }
  }
};

await copy();
