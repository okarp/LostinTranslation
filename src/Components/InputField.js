import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../styles/InputField.css'

function InputField() {

    //Declare variables
    const [value, setValue] = useState("")

    //Declare useHistory hook for routing
    let history = useHistory();

    // Save username to local storage and route to a new page
    const handleSubmit = () => {
        localStorage.setItem('username', value);
        history.push('/translator');
    }

    //Store all the written characters to variable
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
                <div id="buttonDiv"><button type="button" id="button" onClick={handleSubmit}>Create</button></div>
            </form>
        </div>
    )
}

export default InputField