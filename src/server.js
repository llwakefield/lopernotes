const express = require('express');
const morgan = require('morgan');
const { client } = require('./db/client');
const apiRouter = require('./routes');

const server = express();
const PORT = 3001;

server.use(morgan('dev'));

server.use('/api', apiRouter);

server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);

  try {
    await client.connect();
    console.log('Database is open for business!');
  } catch (error) {
    console.error('Database is closed for repairs! :(\n', error);
  }
});
