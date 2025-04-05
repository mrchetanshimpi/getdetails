import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='f-nav-container'>
        <div className='logo'><p className='f-name'>get</p><p className='s-name'>details</p></div>
        <div className='nav-elements element1'>Home</div>
        <div className='nav-elements element2'>About</div>
        <div className='nav-elements element3'>Services</div>
        <div className='nav-elements element4'>Contact</div>
      </div>
      <div className='s-nav-container'>
        <button className='login-btn'>Login / Sign Up</button>
        <button className='add-btn'>Add Your Business</button>
      </div>
    </div>
  )
}

export default Navbar
