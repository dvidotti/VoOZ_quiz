import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className="footer">
      <button className="button-footer"><Link to="/"><img className="footer-button1" src={'/img/Logo Big.png'} alt="vooz"/></Link></button>
    </div>
   
  )
}

export default Footer;