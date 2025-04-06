import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='f-nav-container'>
        <div className='logo'><p className='f-name'>get</p><p className='s-name'>details</p></div>
        <Link className='nav-elements element1'>Home</Link>
        <Link className='nav-elements element2 text-red-500'>About</Link>
        <Link className='nav-elements element3'>Services</Link>
        <Link className='nav-elements element4'>Contact</Link>
      </div>
      <div className='s-nav-container'>
        <button className='login-btn'>Login / Sign Up</button>
        <button className='add-btn'>Add Your Business</button>
      </div>
    </div>
  )
}

export default Navbar
