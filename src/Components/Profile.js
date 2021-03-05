import { useHistory } from 'react-router-dom';

function Profile() {

    let history = useHistory();
    const result = localStorage.getItem('translates');
    var translateArray = result.split(";")

    function handleClick(event) {
        event.preventDefault();
        localStorage.removeItem('user')
        localStorage.removeItem('translates')
        history.push('/');
    }
    
    return (
        <div>
            <h2>Translations:</h2>
            <br />
            {translateArray.map((value, index) => {
                return <h2 key={index}>{value}</h2>
            })}

            <button type="submit" onClick={handleClick}>Back to Start</button>
        </div>
    )
}

export default Profile;