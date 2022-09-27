import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { product, handleAdtoCart } = props;

    const { img, name, price, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h1>{name}</h1>
                <h3>Price: ${price}</h3>
                <small>Rating: {ratings} Star</small>
                <br />
                <small>Seller: {seller}</small>
            </div>
            <button onClick={() => handleAdtoCart(product)}>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;