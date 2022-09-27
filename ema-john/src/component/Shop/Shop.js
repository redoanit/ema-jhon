import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAdtoCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(newCart)

    }
    return (
        <div className='shop'>
            <div className='products'>

                {products.map(product => <Product
                    product={product}
                    key={product.id}
                    handleAdtoCart={handleAdtoCart}
                ></Product>)}
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;