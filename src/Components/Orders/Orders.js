import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import "./Order.css";

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch("https://arcane-chamber-41296.herokuapp.com/selectedProducts?email="+loggedInUser.email)
            .then(res => res.json())
            .then(data => setCart(data))
    },[loggedInUser.email])
    
    const getPrice = cart.reduce((final, product) => final + product.price, 0);
    return (
        <div className="Orders">
            {cart.map(cartItem => <OrderDetails 
            cartItem={cartItem} 
            key={cartItem.key}>

            </OrderDetails>)}
            <div className="total-price">
                <p>Total Price: ${getPrice}</p>
            </div>
        </div>
    );
};

export default Orders;