
import React, { Component } from 'react';
import AuthService from '../auth/auth-service'
import { Link } from 'react-router-dom';
import NavBarBlack from '../navbar/NavBarBlack';
import './Auth.css'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '',
      password: '',
      message: ''  
    };
    this.service = new AuthService();
   
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then(response => {
      this.setState({ username: "", password: ""  });
      this.props.getUser(response)
      this.props.history.push('/course1')
    })
    .catch(error => {
      // this.setState({ message: error.response.data.message});
      this.setState({ message: error.response.data.message});
    }) 
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
    
  render(){
    return(
      <div className='full-login-page'>
        <NavBarBlack className='nave-bar' />
        <hr className="line" />
        <h1 className='title'>Descubra sua voz!</h1>
        <h2 className='subtitle'>Faça o login</h2>
        <form className='form' onSubmit={this.handleFormSubmit}>
          <label className='form-label'>Username:</label>
          <input className='form-input' type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label className='form-label'>Password:</label>
          <input className='form-input' type="password" name="password" onChange={ e => this.handleChange(e)} />
          <input className='form-buttom' type="submit" value="Login" />
        </form>
        <div className="sign-up-link ">
        {this.state.message? 
            <p className="message">{this.state.message}</p>
            : <p hidden></p>}
        <p className="conditional">Não se inscreveu? 
            <Link to={"/signup"}>Signup</Link>
        </p>
        </div>
        <div className="login-block login-scroll">
          <a href='/'><img  src={'/img/Logo Branco.png'} alt="logo"/></a>
        </div>
      </div>
    )  
  }
}

export default Login;