const mongoose = require('mongoose');

const reviews = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true 
  },
  authorName: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true,
    timestamps: true
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

reviews.virtual('movies', {
  ref: 'Movie',
  localField: '_id',
  foreignField: 'review'
});

module.exports = mongoose.model('Review', reviews);
