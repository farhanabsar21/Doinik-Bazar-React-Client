import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import { initializeLogin, handleGoogleSignIn, handleGoogleSignOut } from "./LoginManager";
import "./Login.css";
const Login = () => {
    
    initializeLogin();

    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        success: false,
        photoURL: ""
    });

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const handleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
    }
    const handleSignOut = () => {
        handleGoogleSignOut()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
            })
    }
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <div className="Login">
            <h1>Welcome to Login</h1>
            <div className="sign-in">
                {user.isSignedIn ?
                    <button onClick={handleSignOut}>Sign Out</button> :
                    <button onClick={handleSignIn}>Google Sign In</button>
                }
            </div>
            
        </div>
    );
};

export default Login;