const { Client } = require('pg');

const DB_URL = 'postgres://localhost:5432/quicknote';

const client = new Client(DB_URL);

module.exports = {
  client,
};
