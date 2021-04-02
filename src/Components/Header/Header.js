import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import "./Header.css";
import logo from "../../Image/shop.png";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="Header">
            <div className="logo">
                <img src={logo} alt="logo"/>
                <h2>DoinikBazar</h2>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/login">Login</Link>
                <Link>User: {loggedInUser.email}</Link>
            </div>
            <div className="user">
                <button onClick={()=> setLoggedInUser({})}>Sign Out</button>
            </div>
        </div>
    );
};

export default Header;