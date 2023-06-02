import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
// console.log(props);
const {img, name, seller, price, stock,} = props.product;
    return (
        <div className=' singleProduct'>
            <div className='pic'>
            <img src={img} alt="" />
            </div>

            <div className='text'>
            {/* <h4>This is Product</h4> */}
            <p className='productName'> {name} </p>
            <br />
        <p  className='go'> <small>$$:{price} </small></p>
            <p  className='go'> {seller} <small></small></p>
            <p className='go'><small>Only {stock} left in Stock - Order Soon</small></p>
            { <button onClick = { () => props.handleAddProduct (props.product) }> <FontAwesomeIcon icon={faShoppingCart} /> Add to c  art</button> }
            </div>
            
        </div>
    );
    };

export default Product;