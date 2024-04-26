import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='nav-container'>
      <div className='navbar'>
      <NavLink className="nav-home" to="/" >Home</NavLink>
      <NavLink className="nav-name" to="/">Abdul Rehman</NavLink>
      <NavLink className="nav-contact" to="/contact" >Contact</NavLink>
    </div>
    
    </div>
  )
}

export default Navbar