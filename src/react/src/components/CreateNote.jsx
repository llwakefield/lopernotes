import React, { useState } from 'react';
import apiService from '../api/apiService';
import { Form, Button } from 'react-bootstrap';

const CreateNote = () => {

    const [newNote, setNewNote] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(newNote);
        const data = await apiService.create(newNote);
        console.log(data);
    }

    return (
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
    )
}

export default CreateNote;
