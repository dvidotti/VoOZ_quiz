import React from 'react'
import './NavBarBlack.css'
import { Link } from 'react-router-dom'

const NavBarTransparent = () => {
  return (
    <div className='navbar-transparent'>  
      <div className="horizontal-menu">
        <a className="left-menu-white" href='/about'>Sobre</a>
        <a className="right-menu-white" href='/about'>Compartilhe</a>
      </div>
      <button className="nav-button1"><Link to='/'><img className="menu-mobile-white" src={'/img/Menu Mobile Branco.png'} alt='Menu'/></ Link></button>
    </div>
  )
}

export default NavBarTransparent;