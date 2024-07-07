import React, { useState } from 'react'
import './App.css'
import Mobiles from './Mobiles'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import GithubUsers from './GithubUsers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Calculator from './Calculator'
import BMICalculator from './BMICalculator'
import ExpenseTracker from './ExpenseTracker'
import Cart from './Cart'
import TodoApp from './TodoApp'
const App = () => {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function handleCartClick(item){
    let isItemPresent = false;
    cart.forEach((product) =>{
      if(item.id === product.id){
        isItemPresent = true;
      }
    })
    if(isItemPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item])
  }

  const handleChange = (item, change) => {
    let ind = -1;
    cart.forEach((data, index) =>{
      if(data.id === item.id){
        ind = index;
      }
    })
    const tempArr = cart;
    tempArr[ind].quantity += change;

    if(tempArr[ind].quantity === 0){
      tempArr[ind].quantity = 1;
    }
    setCart([...tempArr]);
  }
  return (
    <BrowserRouter>
      <Navbar size={cart.length} setShowCart={setShowCart} showCart={showCart}/>
      {showCart ? (
        <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} handleChange={handleChange}/>
      ) : (
        <Routes>
          <Route path="/" element={<Mobiles handleCartClick={handleCartClick}/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/github-users" element={<GithubUsers/>}></Route>
          <Route path="/bmi-calculator" element={<BMICalculator/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
          <Route path="/expense-tracker" element={<ExpenseTracker/>}></Route>
          <Route path="/todo" element={<TodoApp/>}></Route>
        </Routes>
      )}
      {warning && <div className='px-4 py-3 bg-red-600 m-2 rounded-md text-gray-200 fixed z-10 top-4 right-4'><span>ℹ️</span> Item is already present</div>}
      <Footer/>
    </BrowserRouter>
  )
}

export default App
