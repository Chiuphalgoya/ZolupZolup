import React from "react";
import './RegisterPage.css';

function movetoLogin(){
  window.location.href="/login";
}

function RegisterPage(){
    return(
        <div className="main">
            <div className="signup">
                <form>
                    <label aria-hidden="true">Sign Up</label>
                    <input type = "text" name= "name"  placeholder = "Enter your name"/>
                    <input type = "email" name = "email" placeholder = "Enter your email" />
                    <input type = "password" name = "password" placeholder = "Enter your password" />
                    <button onClick={movetoLogin}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;