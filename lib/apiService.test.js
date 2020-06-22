const { getCharacter, getCharacters } = require('./apiService');
const mockCharacters = require('./fakeData');

jest.mock('superagent', () => ({
  get(url) {
    const id = url.split('/').slice(-1);
    return Promise.resolve({
      body: mockCharacters[id - 1]
    });
  }
}));

describe('api services', () => {
  it('can fetch a single rick and morty character from the api', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});

