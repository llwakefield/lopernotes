import React from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
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
