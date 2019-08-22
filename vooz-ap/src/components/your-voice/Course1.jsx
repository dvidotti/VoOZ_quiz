import React, { Component } from 'react'
import NavBarBlack from '../navbar/NavBarBlack'
import '../../components/your-voice/YourVoice.css'
import AuthService from '../auth/auth-service';
import instructions from '../../instructions.json';


class Course1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      levelInstruction: '',
      rangeInstruction: '',
      intensityInstruction: '',
      airInstruction: '',
      styleInstruction: '',
      artistInstruction: '',
      wishesInstruction: '',
      loggedInUser: true  
    }
    this.service = new AuthService();
    this.logoutUser = this.logoutUser.bind(this);
  }

setLevel = () => {
  if (this.props.loggedInUser.level === 'iniciante') {
    this.setState({levelInstruction: instructions.level[0]});    
  } else if (this.props.loggedInUser.level === 'intermediário') {
      this.setState({levelInstruction: instructions.level[1]});    
    } else if (this.props.loggedInUser.level === 'avançado') {
        this.setState({levelInstruction: instructions.level[2]}); 
    }
}



setRange = () => {
  if (this.props.loggedInUser.range === 'aguda') {
    this.setState({rangeInstruction: instructions.range[0]});    
  } else if (this.props.loggedInUser.range === 'grave') {
      this.setState({rangeInstruction: instructions.range[1]});    
    } 
}


setAir = () => {
  if (this.props.loggedInUser.air === 'Sobra Ar') {
    this.setState({airInstruction: instructions.air[1]});    
  } else if (this.props.loggedInUser.air === 'Falta Ar') {
      this.setState({airInstruction: instructions.air[0]});    
    } 
}

setStyle = () => {
  if (this.props.loggedInUser.style === 'Jazz') {
    this.setState({styleInstruction: instructions.links[0]});       
    } else if (this.props.loggedInUser.style === 'Rock') {
        this.setState({styleInstruction: instructions.links[1]})
    } else if (this.props.loggedInUser.style === 'Pop') {
        this.setState({styleInstruction: instructions.links[2]})
    } else if (this.props.loggedInUser.style === 'Mpb') {
        this.setState({styleInstruction: instructions.links[3]})
    }
}

componentDidMount() {
  this.setLevel();
  this.setRange();
  this.setAir();
  this.setStyle();
}

  logoutUser() {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null)
    })
  }

  render() { 
    return(
      <div className="full-page-black-scroll">
        <NavBarBlack />
        <div className="scroll-course1">
          <hr className="line-course1" />
          <h1 className='title-lesson'>Olá, {this.props.loggedInUser.username}!</h1>
          <h1 className='subtitle-lesson'> O que descobrimos sobre a sua voz.</h1>
          <h2 className='user-lesson'>{this.state.levelInstruction}</h2>
          <h1 className='user-value-border'>Voz {this.props.loggedInUser.range}</h1>
          <h2 className='user-lesson-border'>{this.state.rangeInstruction}</h2>
          <h1 className='user-value-border'>{this.props.loggedInUser.air} ;)</h1>
          <h2 className='user-lesson-border'>{this.state.airInstruction}</h2>
          <h1 className='user-value-border'>Então é {this.props.loggedInUser.style}! Se inspira </h1>
          <div className="resp-container">
            <iframe title="video-style"className="resp-container"  src={this.state.styleInstruction} />
          </div>
          <h1 className='user-value-border'>Comece, solte a voz!</h1>
          <div className="resp-container">
            <iframe title="video-instruciton" className="resp-container" src={instructions.links[4]} />
          </div>
          <button className='form-button' onClick={this.logoutUser} value='Logout' name='Logout'> Sair</button>
          <div className="logo-scroll">
            <img className="logo-scroll" src={'/img/Logo Branco.png'} alt="logo"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Course1;