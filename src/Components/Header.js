import '../styles/Header.css'
import {Link} from 'react-router-dom';
function Header() {
    const result = localStorage.getItem('username');
    return (        
        <div className="Header">
            <h1>Lost in Translation</h1>
            <Link to="/profile">{result}</Link>
        </div>
    )
}
export default Header