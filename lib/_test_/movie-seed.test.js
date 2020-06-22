const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../utils/connect');

const Movie = require('../models/Movie');
const { createRandom } = require('../data-helpers/seed');

describe('Movie tests', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });

  it('creates 5 random movies by default', () => {
    return createRandom()
      .then(() => Movie.find())
      .then(movies => {
        expect(movies).toHaveLength(5);
      });
  });
});
