import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const MODULE_PATH = "./src/cp/files/script.js";

  const child = fork(MODULE_PATH, args, { silent: true });
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess(['123', '1', 1, true, null]);
