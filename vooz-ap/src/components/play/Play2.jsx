import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import './Play.css'
import { Link } from 'react-router-dom'


class Play2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    }
    this.url = '/audios/menina.mp3'
    this.audio = new Audio(this.url)
  }
  

  play = () => {
    if (!this.state.play) {
      this.audio.play();
      this.setState({play: !this.state.play})
    } else if (this.state.play){
      this.audio.pause();
      this.setState({play: !this.state.play})
    }
  }
   
  next = () => {
    this.audio.pause();
  }

  render() {
    let button;
    if (!this.state.play) {
      button = <button onClick={this.play} className="btn-play"><img className="play-button" src={'/img/play.svg'} alt="play"/></button>
    }else {
      button = <button onClick={this.play} className="btn-play"><img className="pause-button" src={'/img/pause.svg'} alt="pause"/></button>
    }
    return (
      <div>
        <div className="full-page-white">
          <NavBar />
          <h1 className="instruction">Cante esta melodia<br/>também.</h1>
          {button}
          <div className="next">
            <Link to='/q2'><button onClick={this.next}><img className='next-image' src={'/img/next.svg'} alt="next"/></button></Link>
          </div>
          <div className='legend-block-black'>
            <img className="legend-white" src={'/img/Legenda 3 Mobile.svg'} alt="progress"/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Play2;