import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'



const FooterWhite = () => {
  return (
    <div className="footer-button-white-voice">
        <Link  to="/"><img className="logo-white-image" src={'/img/Logo Branco@3x.png'} alt="vooz"/></Link>  
    </div>
   
  )
}

export default FooterWhite;