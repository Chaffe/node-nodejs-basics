import { argv } from 'node:process';

const parseArgs = () => {
  const filteredArgs = argv.slice(2);
  const iterationSize = 2;

  const result = [];
  for (let i = 0; i < filteredArgs.length; i += iterationSize) {
    result.push(`${filteredArgs[i].slice(2)} is ${filteredArgs[i + 1]}`);
  }

  console.log(result.join(", "));
};

parseArgs();
