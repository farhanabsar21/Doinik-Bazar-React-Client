import React from 'react';
import "./OrderDetails.css";

const OrderDetails = (props) => {
    const {name, price} = props.cartItem;
    return (
        <div className="order-details">
            <div className="order-detail-list">
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default OrderDetails;