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

  it('can fetch multiple characters with an array of IDs', () => {
    return getCharacters([1, 2, 3])
      .then(characters => {
        expect(characters).toEqual([
          {
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human'
          },
          {
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human'
          },
          {
            name: 'Summer Smith',
            status: 'Alive',
            species: 'Human'
          }
        ]);
      });
  });
});

