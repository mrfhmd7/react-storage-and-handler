import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
     const { name, price, id } = props.cosmetic;
     
     const addToCart = (id) => {
          // console.log('item added', id);
          addToDb(id)
     };

     // const addToCartWithParam = () => addToCart(id)

     return (
          <div className='product'>
               <h2>Buy this: {name}</h2>
               <p>Only for: ${price}</p>
               <p><small>Product id: {id}</small></p>
               {/* <button className='btn' onClick={addToCartWithParam}>Add to cart</button> */}
               <br/>
               <button className='btn' onClick={ () => addToCart(id)}>Add to Cart</button>
          </div>
     );
};

export default Cosmetic;