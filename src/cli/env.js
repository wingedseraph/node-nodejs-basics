const regex = "^RSS_";

const parseEnv = () => {
  for (const [key, value] of Object.entries(process.env)) {
    if (key.match(regex)) {
      console.log(`${key}=${value};`);
    }
  }
};

parseEnv();
