import React from 'react';
import { useState } from 'react';
import './cart.css'

const AddCart = () => {
    const [cart, setCart] = useState(true);

  const handleCart = () => {
    setCart(cart + 1);
  }
  return(
    <>
      <div className=' bg-primary py-5 d-flex align-items-center justify-content-center p-2'>
        <button className='m-2 w-40 bg-warning rounded-pill' onClick={() => handleCart()}>+</button>
          <h3>cart: {cart}</h3>
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
        <button className='m-2 w-40 bg-primary rounded-pill' onClick={() => setCart(cart - 1)}>-</button>
      </div>
    </>
  )
}
export default AddCart;