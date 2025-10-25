const parseArgs = () => {
  process.argv.slice(2).map((element, i, arr) => {
    if (element.startsWith("--"))
      console.log(`${element.slice(2)} is ${arr[i + 1]},`);
  });
};

parseArgs();
