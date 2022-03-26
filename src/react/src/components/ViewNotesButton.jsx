import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewNotesButton = () => (
    <Link to='/listnotes'>
        <Button variant={'primary'} className='m-2'>
            View Notes
        </Button>
    </Link>
)

export default ViewNotesButton;
