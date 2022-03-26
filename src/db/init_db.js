const { client } = require('./client');
const { createNote, getNotes } = require('./notes');

const { notes: notesToCreate } = require('./testData');

async function buildTables() {
  try {
    client.connect();
    console.log('dropping tables...');
    await client.query(`
        DROP TABLE IF EXISTS notes;
        `);

    console.log('finished dropping tables');
    console.log('building tables...');

    await client.query(`
        CREATE TABLE notes(
            id SERIAL PRIMARY KEY,
            body TEXT NOT NULL
        );`);

    console.log('finished creating tables');
  } catch (error) {
    console.error(error);
  }
}

async function createInitialNotes() {
  try {
    console.log('starting to create notes...');
    console.log(notesToCreate);
    notesToCreate.map((note) => createNote(note.body));
    console.log('finished creating notes');
  } catch (error) {
    console.error('error creating notes');
  }
}

async function retrieveNotes() {
  try {
    const allNotes = await getNotes();
    console.log(allNotes);
  } catch (error) {
    console.error(error);
  }
}

buildTables()
  .then(createInitialNotes)
  .then(retrieveNotes)
  .catch(console.error)
  .finally(() => client.end());
