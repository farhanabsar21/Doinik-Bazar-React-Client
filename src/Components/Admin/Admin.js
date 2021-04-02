import React, { useEffect, useState } from 'react';
import "./Admin.css";

const Admin = () => {
    const [allProduct, setAllProduct] = useState([]);

    useEffect(()=> {
        fetch("https://arcane-chamber-41296.herokuapp.com/adminProducts")
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])

    const [data, setData] = useState({
        name: "",
        price: "",
        quantity: ""
    })

    const handleOnChange = event => {
        const newData = {...data};
        newData[event.target.name] = event.target.value;
        setData(newData);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://arcane-chamber-41296.herokuapp.com/adminAddProduct", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log("product added!"))
    }

    const handleDelete = (event, key) => {
        fetch(`https://arcane-chamber-41296.herokuapp.com/delete/${key}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                event.target.parentElement.style.display = "none"; 
            }
        })
    }

    const [adminProduct, setAdminProduct] = useState({});
    useEffect(()=> {
        fetch("https://arcane-chamber-41296.herokuapp.com/adminAddProduct",)
            .then(res => res.json())
            .then(data => setAdminProduct(data))
    }, [])
    return (
        <div className="Admin">
            <h1>Admin Panel</h1>
            <div className="admin-input">
                <form action="/adminProducts" onSubmit={handleSubmit}>
                    <input type="text" placeholder="product name" name="name" onChange={handleOnChange} />
                    <input type="text" placeholder="price" name="price" onChange={handleOnChange} />
                    <input type="text" placeholder="quantity" name="quantity" onChange={handleOnChange} />
                    <button type="submit">add data</button>
                </form>
            </div>
            <div className="admin-product">
                <div className="admin-product-set">
                    {/* {adminProduct.map(product => <div>
                        <li key={product._id}>{product.name}</li>
                        <p>{product.price}</p>
                        <button onClick={handleDelete}>delete</button>
                    </div>)} */}
                </div>
            </div>
            <div className="output">
                {allProduct.map(product => <div className="output-list">
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={handleDelete}>delete</button>
                </div>)}
            </div>
        </div>
    );
};

export default Admin;