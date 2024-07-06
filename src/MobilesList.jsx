import React, { useState } from 'react';
import './MobilesList.css';

export default function MobilesList(props) {
  const { name, image, price, handleCartClick, item } = props;
  const [wish, setWish] = useState(false);
  function handleWish() {
    if (wish === false) {
      setWish(true);
    }
    else {
      setWish(false);
    }
  }

  return (
    <div className='card relative'>
      <img src={image} alt={name} />
      <div className='mobile'>
        <h2 className='font-bold'>{name}</h2>
        <p>Rs {price}</p>
        <button
          onClick={(e) => {
            handleCartClick(item);
            e.target.innerText = "Added to cart";
            e.target.style.opacity = "0.6"
          }}
          className='add-to-cart bg-gray-800 text-white rounded-md text-sm'>
          Add to cart
        </button>
        <div>
          <button className='text-lg absolute top-2 right-2' onClick={handleWish}>{wish || <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </span>}{wish && <span><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1} stroke="red" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
</span>}</button>
        </div>
      </div>
    </div>
  );
}