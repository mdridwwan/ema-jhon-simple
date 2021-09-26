import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
 //    console.log(props.name)
    // destructuring
    const {name, img, price, seller, stock, star} = props.name;
    const purcheseIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button 
                onClick={() => props.handlerAddToCart(props.name)} 
                className="btn-reguler">
                   {purcheseIcon} add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;