import React from 'react'
import './App.css'
import Mobiles from './Mobiles'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import GithubUsers from './GithubUsers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Mobiles/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/github-users" element={<GithubUsers/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
