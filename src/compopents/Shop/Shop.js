import React, { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart.JS';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);

    const handlerAddToCart = product =>{
        const newCount = [...cart, product];
        setCart(newCount)
    }
   console.log(cart)  

    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Product: {products.length}</h2>
                {
                    products.map(product => <Product 
                        key = {product.key} 
                        name={product}
                        handlerAddToCart={handlerAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;