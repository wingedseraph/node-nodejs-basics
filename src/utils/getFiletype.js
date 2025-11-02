export const getFiletype = (entries) => {
  if (!Array.isArray(entries)) return null;

  return entries.map((dirent) => {
    let type;
    if (dirent.isDirectory()) {
      type = "directory";
    } else if (dirent.isFile()) {
      type = "file";
    } else {
      type = "unknown";
    }

    return {
      Name: dirent.name,
      Type: type,
    };
  });
};
