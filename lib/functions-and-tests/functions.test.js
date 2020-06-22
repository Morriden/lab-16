const fsPromise = require('fs').promises;

const { copyFile, transformFile } = require('./functions');

describe('function testings', () => {
  beforeAll(() => {
    return fsPromise.writeFile('./test-file1.txt', 'Text');
  });
  afterAll(() => {
    return Promise.all([
      fsPromise.unlink('./test-file1.txt', 'Text'),
      fsPromise.unlink('./test-file2.txt', 'Text')
    ]);
  });

  it('it copies a file', () => {
    return copyFile('./test-file1.txt', './test-file2.txt')
      .then(() => {
        return fsPromise.readFile('./test-file2.txt', { encoding: 'utf8' });
      })
      .then(newFile => {
        expect(newFile).toEqual('Text');
      });
  });

  it('transforms a file', () => {
    return transformFile('./test-file1.txt')
      .then(newFile => {
        expect(newFile).toEqual('TXE');
      });
  });
});
