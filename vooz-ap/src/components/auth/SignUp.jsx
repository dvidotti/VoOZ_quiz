import React, { Component } from 'react'
import NavBarBlack from '../navbar/NavBarBlack'
import AuthService from '../auth/auth-service'
import { Link, Redirect } from 'react-router-dom';
import './Auth.css'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.userInfo.level,
      range: this.props.userInfo.range,
      intensity: this.props.userInfo.intensity,
      air: this.props.userInfo.air,
      style: this.props.userInfo.style,
      record: this.props.userInfo.record,
      artist: this.props.userInfo.artist,
      wishes: this.props.userInfo.wishes, 
      name: '',
      username: '',
      password: '',
      redirect: false
    }
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, level, range, intensity, air, style, record, artist, wishes, email, name } = this.state;
  
    this.service.signup(username, password, level, range, intensity, air, style, record,  artist, wishes, email, name )
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            redirect: true,
            message: ''
        });
        this.props.getUser(response)
    })
    .catch( error => {
      this.setState({ message: error.response.data.message});
    })
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render () {
    if (this.state.redirect) {
      return( 
       <Redirect to='/login'/>
      )
    } else {
        return(
          <div className='full-signup-page'>
            <NavBarBlack className='nave-bar-black' />
            <hr className="line" />
            <h1 className='title'>Descubra sua voz!</h1>
            <h2 className='subtitle'>Salve seu perfil</h2>
            <form className='form' onSubmit={this.handleFormSubmit}>
              <label className='form-label'>Nome:</label>
              <input className='form-input' type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
              <label className='form-label'>Email:</label>
              <input className='form-input' type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
              <label className='form-label'>Senha:</label>
              <input className='form-input' type="password" name="password" value={'*'.repeat(this.state.password.length)} onChange={ e => this.handleChange(e)} />
              <input className='form-buttom' type="submit" value="Se inscreva" />
            </form>
            <div className="login-link">
              {this.state.message? 
              <p className="message">{this.state.message}</p>
              : <p hidden></p>}
              <p className="conditional">Já se inscreveu? 
                  <Link to={"/login"}>  Acesse  </Link>
              </p>
            </div>
            <div className="logo-scroll">
              <a href='/'><img  src={'/img/Logo Branco.png'} alt="logo"/></a>
            </div>
          </div>
        )
      }
  }
}

export default SignUp;