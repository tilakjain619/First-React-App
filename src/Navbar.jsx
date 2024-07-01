import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='p-4 flex justify-between'>
        <div className="font-bold">
            <Link to="/">Mobile Shop</Link>
        </div>
        <ul className='flex gap-5'>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
   </nav>
  )
}

export default Navbar
