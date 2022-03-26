/* eslint-disable consistent-return */
const { client } = require('./client');

async function getNotes() {
  try {
    const { rows: notes } = await client.query(`
        SELECT * FROM notes;`);
    return notes;
  } catch (error) {
    console.error(error);
  }
}

async function createNote(body) {
  try {
    const { rows: [note] } = await client.query(
      `
        INSERT INTO notes(body)
        VALUES($1)
        RETURNING *;`,
      [body],
    );
    return note;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getNotes, createNote,
};
