import React, { useEffect, useState } from 'react';
import apiService from '../api/apiService';
import { Card } from 'react-bootstrap';

const ViewNotes = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const retrieveNotes = async() => {
          const currNotes = await apiService.get();
          console.log(currNotes);
          setNotes(currNotes);
        }
        retrieveNotes();
    }, []);

    return (
        <>
            <h2>
                View Notes
            </h2>
            
              {notes?.map((note) => (
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
            ))}
            
        </>
    )
}


export default ViewNotes;
