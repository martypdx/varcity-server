const dbUri = process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/varcity-test';

require('../../lib/helpers/connect')(dbUri);
const connection = require('mongoose').connection;

module.exports = {
  drop() {
    return connection.dropDatabase();
  }
};
