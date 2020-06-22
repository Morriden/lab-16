const mongoose = require('mongoose');

const movies = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  studio: {
    type: String,
    required: true
  } }, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    }
  },
  toObject: {
    virtuals: true
  }
}
);

movies.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'movie'
});

module.exports = mongoose.model('Movie', movies);
