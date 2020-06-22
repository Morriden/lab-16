const request = require('mongoose');
var Chance = require('chance');
const Movie = require('../models/Movie');

var chance = new Chance();

async function createRandom(input) {
  if(!input) {
    const arr = await Promise.all([...Array(5)].map(() => {

      return Movie.create({
        title: chance.word({ syllables: 3 }),
        description: chance.sentence({ words: 5 }),
        studio: chance.sentence({ words: 5 })
      });
    })); 
    await Promise.all([...Array(100)].map(() => {
        return Review.
    }))
  }
}

module.exports = {
  createRandom,
};
