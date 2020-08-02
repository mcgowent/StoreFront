// Build form here.

import React, { useState } from 'react';
import axios from 'axios';
import './forms.css';

const Forms = () => {
    const [user, setUser] = useState({
        email: "",
        psw: "",
        pswRepeat: ""
    })
    const [displayUser, setDisplayUser] = useState({
        email: "",
        psw: ""
    });

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        console.log("User Created: ", user)
        axios
            .post('https://reqres.in/api/users/', user)
            .then(res => {
                console.log(res);
                setDisplayUser(res.data);
            })
            .catch(err => console.log(err.response));
        
        setUser({ email: '', psw: '', pswRepeat: ''})
        event.preventDefault();
    }
    return (
        <div className="form-cont">
            {console.log(user)}
            <form onSubmit={event => handleSubmit(event)}>
            <h3>Sign Up to Test the Store.</h3>
                <input 
                    type="email" 
                    placeholder="Enter Email" 
                    name="email" 
                    required 
                    value={user.email}
                    onChange={event => handleChange(event)} 
                />
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw" 
                    required 
                    value={user.psw}
                    onChange={event => handleChange(event)}
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="pswRepeat" 
                    required 
                    value={user.pswRepeat}
                    onChange={event => handleChange(event)}
                />
                <div className="button-cont">
                    <button type="submit" className="signupbtn">Sign Up</button>
                    <button type="button" className="cancelbtn">Cancel</button>
                </div>
                <p>Already have an account? <a href="#">Signin here</a></p>
            </form>
            <div className="newUsers">
                <h3>Name: {displayUser.email}</h3>
                <h3>Password: {displayUser.psw}</h3>
            </div>
        </div>
    )
}

export default Forms;