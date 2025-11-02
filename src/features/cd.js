export const cd = (path) => {
  try {
    process.chdir(path);
  } catch (err) {
    if (err instanceof Error) throw err;

    throw new Error();
  }
};
