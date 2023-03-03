import React from "react";
import './LoginPage.css';

function movetoMain(){
  window.location.href="/";
}

function movetopassword(){
    window.location.href="/password";
}
function LoginPage(){
    return(
        <div className="main">
            <div className="login">
                <form>
                    <label aria-hidden="true">Login</label>
                    <input type = "email" name = "email" placeholder = "Enter your email" />
                    <input type = "password" name = "password" placeholder = "Enter your password" />
                    <button onClick={movetoMain}>Login</button>
                    <button onClick={movetopassword}>Forgot Password?</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;