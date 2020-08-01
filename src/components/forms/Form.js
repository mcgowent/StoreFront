// Build form here.

import React, { useState, useEffect } from 'react';
import './forms.css';

const Forms = () => {
    return (
        <div class="form-cont">
            <form>
                <label for="email">Email</label>
                <input type="text" placeholder="Enter Email" name="email" required></input>

                <label for="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required></input>
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Forms;