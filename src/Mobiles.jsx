import React, { useState } from 'react'
import MobilesList from './MobilesList'
import MobileData from './mobiles.json';

export default function Mobiles() {
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  function handleAddToCart(item) {
  setCart([...cart, item])
      
    setTotalCount(totalCount + item.count);
  }
  return (
    <>
      <div className="title">
        Popular Mobiles
      </div>
      <details className='p-2 m-4 border-2 border-gray-200 rounded-md'>
        <summary className='font-bold'>
          Cart ({totalCount})</summary>
        <ul className='mt-3'>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} x {item.count} = {Number(item.price) * item.count}
            </li>
          ))}
        </ul>
      </details>
      <div className='mobileContainer'>
        {MobileData.map((ele) => (
          <MobilesList
            key={ele.id} // add a unique key prop
            name={ele.name}
            image={ele.image}
            price={ele.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  )
}
