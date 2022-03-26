import { Card } from 'react-bootstrap';
import React from 'react';

const NoteCards = ({ notes }) => (
    notes.map((note) => (
    <Card key={note.id} className='m-2' style={{'color': 'black', 'width': '18rem'}}>
        <Card.Body>
            <Card.Title>
              Note {note.id}:
            </Card.Title>
            <Card.Text>
            {note.body}
            </Card.Text>
        </Card.Body>
    </Card>
    ))
)

export default NoteCards;
