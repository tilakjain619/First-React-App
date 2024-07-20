import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
   <footer className='p-4 flex justify-between bg-gray-900 text-gray-200'>
        <ul className='flex flex-col gap-1 text-gray-300 text-sm'>
        <h2 className='font-bold text-md'>Mini Projects:</h2>
            <li><Link to="/github-users">Random User</Link></li>
            <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/expense-tracker">Expense Tracker</Link></li>
            <li><Link to="/todo">Todo App</Link></li>
            <li><Link to="/weather">Weather App</Link></li>
        </ul>
        <ul className='flex flex-col gap-1 text-gray-300 text-sm'>
            <h2 className='font-bold text-md'>Practice:</h2>
            <li><Link to="/pagination">Pagination</Link></li>
            <li><Link to="/practice">Practice problems</Link></li>
        </ul>
   </footer>
  )
}

export default Footer
