import React, {Component} from 'react'
import './NavBar.css'
import About from '../home/About'

class NavBar extends Component {
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
        <div>
          <About toogleActive={this.toogleActive}/>
          <div className='navbar'>  
            <div className="horizontal-menu">
              <button className="left-menu" onClick={this.toogleActive}>Sobre</button>
              <a className="right-menu" href='/'>Início</a>
            </div>
            <button className="nav-button1" onClick={this.toogleActive}><img src={'/img/Symbol Menu.png'} alt='Menu'/></button>
          </div>
       </div>
      )
    }
    
    return (
      <div className='navbar'>  
        <div className="horizontal-menu">
          <button className="left-menu" onClick={this.toogleActive}>Sobre</button>
          <a className="right-menu" href='/'>Início</a>
        </div>
        <button className="nav-button1" onClick={this.toogleActive}><img className="menu-image" src={'/img/Symbol Menu.png'} alt='Menu'/></button>
      </div>

    )
  }
}

export default NavBar;