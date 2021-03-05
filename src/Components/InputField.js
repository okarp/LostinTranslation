import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../styles/InputField.css'

function InputField() {

    const [value, setValue] = useState("")
    let history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem('username', value);
        const result = localStorage.getItem('username' || '');
        console.log(result);
        history.push('/translator');
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="InputField">
            <form onSubmit={handleSubmit}>                
                    <label>
                        <p>Create a user</p>
                        <input name="name" placeholder="What's your name?" onChange={onChange} />
                    </label>
                    <button type="submit">Submit</button>               
            </form>
        </div>
    )
}

export default InputField