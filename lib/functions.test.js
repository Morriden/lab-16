const fsPromise = require('fs').promises;

const { copyFile, transformFile } = require('./functions');

describe('function testings', () => {
  beforeAll(() => {
    return fsPromise.writeFile('./test-file1.txt', 'text');
  });
  afterAll(() => {
    return Promise.all([
      fsPromise.unlink('./test-file1.txt', 'text'),
      fsPromise.unlink('./test-file2.txt', 'text')
    ]);
  });

  it('it copies a file', () => {
    return copyFile('./test-file1.txt', './test-file2.txt')
      .then(() => {
        return fsPromise.readFile('./test-file2.txt', { encoding: 'utf8' });
      })
      .then(newFile => {
        expect(newFile).toEqual('text');
      });
  });

  it('transforms a file', () => {
    return transformFile('./test-file1.txt')
    .then(() => {
        return fsPromise.readFile('./test-file1.txt')
    })
  });
});
