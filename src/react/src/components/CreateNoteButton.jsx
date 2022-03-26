import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CreateNoteButton = () => (
    <Link to='/createnote'>
        <Button variant={'primary'} className='m-2'>
            Create Note
        </Button>
    </Link>
)

export default CreateNoteButton;
