import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../styles/InputField.css'

function InputField() {

    const [value, setValue] = useState("")    
    let history = useHistory();

    const handleSubmit = () => {        
        localStorage.setItem('username', value);       
        history.push('/translator');
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }    
    return (
        <div className="InputField">
            <form onSubmit={handleSubmit}>                
                    <label>
                        <p>Create a user to access the translator</p>
                        <input name="name" placeholder="What's your name?" onChange={onChange} />
                    </label>
                    <div id="buttonDiv"><button type="button" id="button" onClick={handleSubmit}>Submit</button></div>               
            </form>
        </div>
    )
}

export default InputField