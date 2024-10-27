// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/Admin_Assets/nav-logo.svg'; 
import navProfile from '../../assets/Admin_Assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={nav_logo} alt="" className='nav_logo' />
      <img src={navProfile} alt=""  className='nav-profile'/>
    </div>
  )
}

export default Navbar
