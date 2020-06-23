const fsPromises = require('fs').promises;

const reverseString = (string) => {
  let splitString = string.split('');
  let reverseString = splitString.reverse();
  let joinedString = reverseString.join('');

  return joinedString;
};

async function copyFile(src, dest) {
  const fileToBeCopied = await fsPromises.readFile(src, { encoding: 'utf8' });
  let copiedFile = await fsPromises.writeFile(dest, fileToBeCopied);
  return copiedFile;
}

async function transformFile(path) {
  const string = await fsPromises.readFile(path, { encoding: 'utf8' });
  let noCapString = await string.replace(/[^a-z]/g, '');
  let upperCaseString = await noCapString.toUpperCase();
  let reversedString = await reverseString(upperCaseString);
  return reversedString;
}

module.exports = {
  copyFile,
  transformFile
};
