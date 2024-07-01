import React, { useState } from 'react';
import './MobilesList.css';

export default function MobilesList(props) {
  const { name, image, price, onAddToCart } = props;
  const [count, setCount] = useState(0);

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleAddToCart() {
    onAddToCart({ name, image, price, count });
  }

  return (
    <div className='card'>
      <img src={image} alt={name}/>
      <div className='mobile'>
        <h2 className='font-bold'>{name}</h2>
        <p>Rs {price}</p>
        <div className='cart-options bg-gray-300 px-2 py-1 rounded-full'>
          <button onClick={handleDecrement}>-</button>
          <span>{count}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleAddToCart} className='add-to-cart bg-gray-800 text-white rounded-md text-sm'>
          Add to cart
        </button>
      </div>
    </div>
  );
}