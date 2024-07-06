import React, { useState } from 'react'
import MobilesList from './MobilesList'
import MobileData from './mobiles.json';

export default function Mobiles({handleCartClick}) {
  return (
    <div className='min-h-[90vh]'>
      <div className="title">
        Populat Items
      </div>
      <div className='mobileContainer'>
        {MobileData.map((ele) => (
          <MobilesList
            key={ele.id} // add a unique key prop
            name={ele.name}
            image={ele.image}
            item = {ele}
            price={ele.price}
            handleCartClick={handleCartClick}
          />
        ))}
      </div>
    </div>
  )
}
