import { Link } from 'react-router-dom';

const Header = () => (
    <Link to='/' className='mb-5' style={{'textDecoration': 'none', 'color': 'white'}}>
        <h2>
          Loper Notes
        </h2>
    </Link>
)

export default Header;