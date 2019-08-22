
import React, {Component} from 'react'
import './NavBarBlack.css'
import About from '../home/About'

class NavBarBlack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toogleActive = () => {
    this.setState({active: !this.state.active})
  }

  render () {
    if(this.state.active){
      return (
        <div className='navbar-black'>  
          <About toogleActive={this.toogleActive}/>
          <div className="horizontal-menu">
            <button className="left-menu-white" onClick={this.toogleActive}>Sobre</button>
            <a className="right-menu-white" href='/'>Início</a>
          </div>
           <button className="nav-button1" onClick={this.toogleActive}><img className="menu-mobile-white" src={'/img/Menu Mobile Branco.png'} alt='Menu'/></button>
          </div>
      )
    } else {
      return (
        <div className='navbar-black'>  
          <div className="horizontal-menu">
            <button className="left-menu-white" onClick={this.toogleActive}>Sobre</button>
            <a className="right-menu-white" href='/'>Início</a>
          </div>
          <button className="nav-button1" onClick={this.toogleActive}><img className="menu-mobile-white" src={'/img/Menu Mobile Branco.png'} alt='Menu'/></button>
        </div>
      )
    }
  }
}

export default NavBarBlack;

