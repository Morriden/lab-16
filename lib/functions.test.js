const fsPromise = require('fs').promises;

const { copyFile } = require('./functions');

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
    return copyFile('./test-file1.txt', './text-file2.txt')
      .then(() => {
        return fsPromise.readFile('./test-fil2.txt', { encoding: 'utf8' });
      })
      .then(newFile => {
        expect(newFile).toEqual('text');
      });
  });
});
