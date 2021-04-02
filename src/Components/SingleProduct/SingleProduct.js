import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import "./SingleProducts.css";

const SingleProduct = (props) => {
    const {name, price, image, key} = props.product;
    const [dataBack, setDataBack] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    

    useEffect(()=>{
        fetch("https://arcane-chamber-41296.herokuapp.com/allProducts")
        .then(res => res.json())
        .then(data => setDataBack(data))
    }, [])

    

    const handleAddProduct = () => {
        const prevDataId = props.product;
        const newData = dataBack.filter(selectedData => selectedData.key === prevDataId.key);
        
        fetch("https://arcane-chamber-41296.herokuapp.com/selectedProducts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData)
        })
    }
    return (
        <div className="SingleProduct">
            <div className="productDetail">
                <img src={image} alt="products" />
                <h3>{name}</h3>
                <p>${price}</p>
                <Link to={"/product/" + key}><button>Buy Now</button></Link>
                <button onClick={handleAddProduct}>Order</button>
            </div>
        </div>
    );
};

export default SingleProduct;