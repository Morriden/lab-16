const fsPromises = require('fs').promises;

async function copyFile(src, dest) {
  const fileToBeCopied = await fsPromises.readFile(src, { encoding: 'utf8' });
  let copiedFile = await fsPromises.writeFile(dest, fileToBeCopied);
  return copiedFile;
}

module.exports = {
  copyFile
};
