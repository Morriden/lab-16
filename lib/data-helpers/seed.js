var Chance = require('chance');
const Movie = require('../models/Movie');
const Review = require('../models/Review');

var chance = new Chance();

async function createRandom(input = { movies: 5, reviews: 100 }) {
  
  const array = await Promise.all([...Array(input.movies)].map(() => {
    return Movie.create({
      title: chance.word({ syllables: 3 }),
      description: chance.sentence({ words: 5 }),
      studio: chance.sentence({ words: 5 }) 
    });  
  }));
  await Promise.all([...Array(input.reviews)].map(() => {
    return Review.create({
      movie: chance.pickone(array).id,
      authorName: chance.name(),
      comment: chance.paragraph({ sentences: 2 })
    });
  }));
}

module.exports = {
  createRandom,
};
