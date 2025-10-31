export const cd = (path) => {
  try {
    process.chdir(path);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);

    throw new Error();
  }
};
