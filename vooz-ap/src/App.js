import React, { Component } from 'react';
import Home from './components/home/Home'
import Play1 from './components/play/Play1'
import Play2 from './components/play/Play2'
import Play3 from './components/play/Play3'
import Q1 from './components/questions/Q1'
import Q2 from './components/questions/Q2'
import Q3 from './components/questions/Q3'
import QAir from './components/questions/QAir'
import QRange from './components/questions/QRange'
import QIntensity from './components/questions/QIntensity'
import Q4 from './components/questions/Q4'
import QJazz from './components/questions/QJazz'
import QRock from './components/questions/QRock'
import QPop from './components/questions/QPop'
import QMpb from './components/questions/QMpb'
import QWishes from './components/questions/QWishes'
import YourVoice from './components/your-voice/YourVoice'
import Course1 from './components/your-voice/Course1'
import SignUp from './components/auth/SignUp'
import LogIn from './components/auth/LogIn'
import Ella from './components/artist/Ella'
import Low from './components/passages/Low'
import StrongVoice from './components/passages/StrongVoice'
import LightVoice from './components/passages/LightVoice'
import High from './components/passages/High'
import Breath from './components/passages/Breath'
import ProtectedRoute from './components/auth/protected-route'
import AuthService from './components/auth/auth-service';
import NotFound from './components/passages/NotFound'


import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      level: '',
      range: '',
      intensity: '',
      air: '',
      style: '',
      record: '',
      artist: '',
      wishes: '',
      email: '',
      name: '',
      username: '',
      password: '',
      loggedInUser: false
    }
    this.service = new AuthService();
    this.getLevel = this.getLevel.bind(this);
  }
  

  getLevel(name, value){
    this.setState({[name]: value});
  }

  fetchUser() {
    if(this.state.loggedInUser === null) {
      this.service.loggedin()
      .then(response => {
        console.log("THEN FETCH", response)
        this.setState({
          loggedInUser: response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser: false
        }) 
      })
    }
  }


  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }


  render(){
    this.fetchUser();
    if(this.state.loggedInUser){ 
      return (
        <Switch>
          <ProtectedRoute path='/' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/play1' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/play2' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/play3' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/q1' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/q2' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/q3' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/q4' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qrange' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qair' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qintensity' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qjazz' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qpop' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qrock' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qmpb' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qwishes' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/ella' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/low' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/breath' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/high' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qstrong' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/qlight' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/yourvoice' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          <ProtectedRoute path='/signup' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } />
          {/* <ProtectedRoute path='/login' user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} component={Course1} /> } /> */}
          <ProtectedRoute path='/course1' getUser={this.getTheUser} user={this.state.loggedInUser} userInfo={this.state} component={Course1} />
          <ProtectedRoute path="*" user={this.state.loggedInUser} userInfo={this.state} component={Course1} />
        </Switch>
      ) 
    } else {
      return (
        <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/play1' component={Play1} />
              <Route exact path='/play2' component={Play2} />
              <Route exact path='/play3' component={Play3} />
              <Route path='/q1' component={Q1} />
              <Route path='/q2' render={(props) =><Q2  getLevel={this.getLevel} />} />
              <Route path='/q3' render={(props) =><Q3  getLevel={this.getLevel} />} />
              <Route path='/qrange' render={(props) =><QRange  getRange={this.getLevel} />} />
              <Route path='/qintensity' render={(props) =><QIntensity  getIntensity={this.getLevel} />} />
              <Route path='/qair' render={(props) =><QAir  getAir={this.getLevel} />} />
              <Route path='/q4' render={(props) => <Q4 getStyle={this.getLevel} />} />
              <Route path='/qjazz' render={(props) => <QJazz getArtist={this.getLevel} /> } />
              <Route path='/qpop' render={(props) => <QPop getArtist={this.getLevel} /> } />
              <Route path='/qrock' render={(props) => <QRock getArtist={this.getLevel} /> } />
              <Route path='/qmpb' render={(props) => <QMpb getArtist={this.getLevel} /> } />
              <Route path='/qwishes' render={(props) => <QWishes getWishes={this.getLevel} /> }/>
              <Route path='/yourvoice' render={(props) => <YourVoice userInfo={this.state} /> } />
              <Route path='/signup' render={(props) => <SignUp userInfo={this.state} getUser={this.getTheUser} /> } />
              <Route path='/login' render={(props) => <LogIn {...props} user={this.state.loggedInUser} userInfo={this.state} getUser={this.getTheUser} /> } />
              <Route path='/ella' component={Ella} />
              <Route path='/low' component={Low} />
              <Route path='/breath' component={Breath} />
              <Route path='/high' component={High} />
              <Route path='/qstrong' component={StrongVoice} />
              <Route path='/qlight' component={LightVoice} />
              <ProtectedRoute path='/course1'  user={this.state.loggedInUser} userInfo={this.state} component={Course1} />
              <Route path="*" component={NotFound} />
            </Switch>
        </div>
      )
      }
    }
}

export default App;
