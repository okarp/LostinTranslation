import { useHistory } from 'react-router-dom';
import '../styles/Profile.css'
function Profile() {

    //Declare useHistory hook for routing
    let history = useHistory();

    //Declare variables       
    var translationArr = []

    //Get translations for the local storage and save them to array
    if (localStorage.getItem("translates") != null)
        translationArr = localStorage.getItem("translates").split(";")

    //When button is pressed, clear local storage and route to homepage
    function handleClick(event) {
        event.preventDefault();
        localStorage.removeItem('username')
        localStorage.removeItem('translates')
        history.push('/');
    }

    //print all the translations to the screen from the array
    const listTranslations = translationArr.map((translate, i) =>
        <h2 key={i}>'{translate}'</h2>
    );

    return (
        <div id="translationQueries">
            <span id="textelement">This page displays your latest translations, 10 latest translations are saved.</span>            
            {translationArr.length > 0 &&
                <div>
                    {listTranslations}
                </div>
            }
            <div id="buttonDiv"><button type="button" id="button" onClick={handleClick}>Log out & clear local storage</button></div>
        </div>
    )
}

export default Profile;


