import React from 'react'
import MobilesList from './MobilesList'
import MobileData from './mobiles.json';

export default function Mobiles() {
  return (
    <>
    <div className="title">
          Popular Mobiles
        </div>
      <div className='mobileContainer'>
      {MobileData.map((ele) => (
        <MobilesList
          key={ele.id} // add a unique key prop
          name={ele.name}
          image={ele.image}
          price={ele.price}
        />
      ))}
    </div>
    </>
  )
}
