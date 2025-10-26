const parseEnv = () => {
  const RSSEnvKeys = Object.keys(process.env).filter((env) => env.startsWith("RSS"));
  const RSSEnvResult = RSSEnvKeys
    .map((key) => `${key}=${process.env[key]}`)
    .join("; ");
  console.log(RSSEnvResult);
};

parseEnv();
