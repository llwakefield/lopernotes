import React, { useState } from 'react';
import apiService from '../api/apiService';
import { Form, Button } from 'react-bootstrap';
import ViewNotesButton from './ViewNotesButton';

const CreateNote = () => {

    const [newNote, setNewNote] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        await apiService.create(newNote);
        setNewNote('');

    }

    return (
        <>
            <Form onSubmit={(e) => submitHandler(e)}>
                <Form.Label>
                    New Note
                </Form.Label>
                <Form.Control
                    className='m-2'
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    required
                />
                <Button type='submit' className='m-2'>
                    Create Note
                </Button>
            </Form>
            <ViewNotesButton />
        </>
        
    )
}

export default CreateNote;
