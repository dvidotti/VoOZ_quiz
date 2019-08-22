import React from 'react'
import './Footer.css'
// import logoFooterWhite from '../../img/Logo Branco@3x.png'
import { Link } from 'react-router-dom'



const FooterTransparent = () => {
  return (
    <div className="footer-transparent">
        <Link  to="/"><img className="logo-white-image" src="img/Logo Branco@3x.png" alt="vooz"/></Link>  
    </div>
   
  )
}

export default FooterTransparent;