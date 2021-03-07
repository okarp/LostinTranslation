import '../styles/Header.css'
import {Link} from 'react-router-dom';

function Header() { 
    return (               
        <div className="Header">
            <h1>Lost in Translation</h1>
            <div><Link to="/profile">Visit your profile</Link></div>
            <div><Link to="/translator">Sign language translator</Link></div>
        </div>
    )
}
export default Header