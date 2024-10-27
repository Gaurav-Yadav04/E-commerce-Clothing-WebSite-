/* eslint-disable react/jsx-no-undef */
import React, { useContext, useState } from 'react';
import './Nav.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import  cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export default function Navbar() {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);

    const logoutHandler = () => {
      localStorage.removeItem('auth-token');
      window.location.replace('/');
    }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <div className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:'none',color:'#626262'}} to="/">Shop</Link> {menu==="shop"?<hr/>:<> </>}</li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:'none',color:'#626262'}} to="/mens">Man</Link>{menu==="mens"?<hr/>:<> </>}</li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:'none',color:'#626262'}} to="/womens">Women</Link> {menu==="womens"?<hr/>:<> </>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:'none',color:'#626262'}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<> </>}</li>
      </div>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{logoutHandler()}}>Logout</button>
        :<Link to="/login"> <button>Login</button> </Link>}
         <Link to="/cart"> <img src={cart_icon} alt='' /> </Link >
        <div className="nav-cart-count"> {getTotalCartItems()} </div>
      </div>
    </div>
  )
}
