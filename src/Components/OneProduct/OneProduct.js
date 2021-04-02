import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import "./OneProduct.css";

const OneProduct = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const { productKey } = useParams();
    const [oneProduct, setOneProduct] = useState([]);
    useEffect(()=>{
        fetch("https://arcane-chamber-41296.herokuapp.com/products/"+productKey)
            .then(res => res.json())
            .then(data => setOneProduct(data))
    }, [productKey])
    
    const { name, price, quantity } = oneProduct;

    return (
        <div className="OneProduct">
            <div className="OneProduct-detail">
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{quantity}</p>
                <button onClick={() => alert("Order Placed!")}>Checkout</button>
            </div>
        </div>
    );
};

export default OneProduct;