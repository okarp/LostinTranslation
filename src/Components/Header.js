import '../styles/Header.css'
import {Link} from 'react-router-dom';

function Header() { 
    return (               
        <div className="Header">
            <h1>Lost in Translation</h1>
            <Link to="/profile">Profile</Link>
        </div>
    )
}
export default Header