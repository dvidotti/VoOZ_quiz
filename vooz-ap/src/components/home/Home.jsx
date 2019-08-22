import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import './Home.css'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
    this.redirect = this.redirect.bind(this);
  }
  

  redirect() {
   this.setState({
    redirect: true
   });
  };  
  
  render(){
    if(this.state.redirect){
     return <Redirect to='/play1'/>
    }
    return (
      <div className="full-page-white">
        <NavBar />
        <div className="logo-home">
          <img className="logo" src='/img/Logo_VoOZ_4s.gif' alt="vooz" />
        </div>
        <h1 className="slogan">Descubra a sua voz</h1>
    <button onClick={this.redirect} className="btn-home">Faça o teste</button>
      </div>
    )
  }
}

export default Home;