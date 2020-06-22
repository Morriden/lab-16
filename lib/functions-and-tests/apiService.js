const request = require('superagent');

async function getCharacter(id) {
  const data = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await data.body;
  const result = await {
    name: character.name,
    status: character.status,
    species: character.species
  };
  return result;
}

async function getCharacters(array) {
  const result = await Promise.all(array.map(id => getCharacter(id)));
  return result;
}

module.exports = {
  getCharacter,
  getCharacters
};
