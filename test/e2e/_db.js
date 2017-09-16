process.env.MONGODB_URI = 'mongodb://localhost:27017/varcity-test';
require('../../lib/helpers/connect');
const connection = require('mongoose').connection;

module.exports = {
  drop() {
    return connection.dropDatabase();
  }
};