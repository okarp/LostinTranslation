import '../styles/Header.css'
function Header() {
    const result = localStorage.getItem('username');
    return (
        <div className="Header">
            <h1>Lost in Translation</h1>
            <h3>{result}</h3>
        </div>
    )
}
export default Header