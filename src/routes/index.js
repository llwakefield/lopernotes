const express = require('express');
const { getNotes, createNote } = require('../db/notes');

const apiRouter = express.Router();

apiRouter.get('/listnotes', async (req, res, next) => {
  try {
    const notes = await getNotes();
    res.send(notes);
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line consistent-return
apiRouter.post('/createnote', async (req, res, next) => {
  try {
    const { noteText } = req.body;
    const note = await createNote(noteText);
    res.send(note);
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
