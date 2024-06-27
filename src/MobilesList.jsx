import React from 'react';
import './MobilesList.css';

export default function MobilesList(props) {
    let {name, image, price} = props;
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Rs {price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}