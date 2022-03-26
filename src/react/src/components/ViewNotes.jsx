import React, { useEffect, useState } from 'react';
import apiService from '../api/apiService';
import CreateNoteButton from './CreateNoteButton';
import NoteCards from './NoteCards';

const ViewNotes = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const retrieveNotes = async() => {
          const currNotes = await apiService.get();
          setNotes(currNotes);
        }
        retrieveNotes();
    }, []);

    return (
        <>
            <h2>
                View Notes
            </h2>
            {notes.length ? <NoteCards notes={notes}/> : <h3>Add your first note!</h3>}
            <CreateNoteButton />
        </>
    )
}


export default ViewNotes;
