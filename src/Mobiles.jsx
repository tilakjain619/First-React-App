import React, {useState} from 'react'
import MobilesList from './MobilesList'
import MobileData from './mobiles.json';

export default function Mobiles() {
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  function handleAddToCart(item) {
    setCart([...cart, item]);
    setTotalCount(totalCount + item.count);
  }
  return (
    <>
    <div className="title">
          Popular Mobiles
        </div>
        <div>
        <p>Total items in cart: {totalCount}</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} x {item.count}
          </li>
        ))}
      </ul>
        </div>
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
