import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Mama from '../Mama/Mama';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first35 = fakeData.slice(0, 35);
    const [products, setProduct] =  useState(first35);
    const [cards, setcard] = useState ([]);

    const handleAddProduct =  (product) => {
        console.log("product added", product )
        const newcart = [...cards, product ]
        setcard(newcart);
    }
 
    return (
        <div className='shopContainer'>


            <div className="store">
                {
                    products.map(pro => <Product
            handleAddProduct = {handleAddProduct}  
                    product = {pro} > 
                     </Product> )
                }
           

            </div>

            <div className="card">
            
<Mama cards = {cards} > </Mama>
           
            </div>
            
        </div>
    );
};

export default Shop;