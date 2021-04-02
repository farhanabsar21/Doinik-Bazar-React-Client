import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleProduct from '../SingleProduct/SingleProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);

    useEffect(()=>{
        fetch("https://arcane-chamber-41296.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    const { productKey } = useParams();
    useEffect(()=>{
        fetch("https://arcane-chamber-41296.herokuapp.com/products/"+productKey)
            .then(res => res.json())
            .then(data => setOneProduct(data))
    }, [productKey])

    return (
        <div>
            {products.length === 0 && 
                <div className="spinner">
                    <Spinner animation="border" variant="success">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            }
            
            {products.map(product => <SingleProduct 
            product={product} 
            key={product.key} 
            oneProduct={oneProduct}
            ></SingleProduct>)}
        </div>
    );
};

export default Products;