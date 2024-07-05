import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className='p-4 flex justify-between bg-gray-900 text-gray-200'>
    <div>
        <h2>Mini Projects:</h2>
    </div>
        <ul className='flex flex-col gap-1 text-gray-300 text-sm'>
            <li><Link to="/github-users">Github users</Link></li>
            <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/expense-tracker">Expense Tracker</Link></li>
        </ul>
   </footer>
  )
}

export default Footer
