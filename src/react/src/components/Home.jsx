import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {

    return (
        <>
            <h2 className='mb-5'>
                Loper Notes
            </h2>
            <Button variant={'primary'} className='m-2'>
                Create Note
            </Button>
            <Button variant={'primary'} className='m-2'>
                View Notes
            </Button>
        </>
    )
}

export default Home;
