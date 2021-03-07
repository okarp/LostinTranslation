import { useHistory } from 'react-router-dom';
import '../styles/Profile.css'
import {Link} from 'react-router-dom';

function Profile() {

    let history = useHistory();    
    var translationArr = []
    if (localStorage.getItem("translates") != null)
        translationArr = localStorage.getItem("translates").split(";")  
    
    function handleClick(event) {
        event.preventDefault();
        localStorage.removeItem('username')
        localStorage.removeItem('translates')
        history.push('/');
    }

    const listTranslations = translationArr.map((translate, i) =>  
        <h2 key={i}>'{translate}'</h2>
    );    
    
    return (
        <div id ="translationQueries">
            <span id="textelement">This page displays your latest translations, 10 latest translations are saved.</span>
            <br />   
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


