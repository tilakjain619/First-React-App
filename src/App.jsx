import React from 'react'
import './App.css'
import Mobiles from './Mobiles'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Mobiles/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
