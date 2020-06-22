const { getCharacter, getCharacters } = require('./apiService');

describe('api services', () => {
  it('can fetch a single rick and morty character from the api', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: '',
          status: '',
          species: ''
        });
      });
  });
});

