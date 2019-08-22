import React, { Component }from 'react'
import { Redirect } from 'react-router-dom'
import Sound from 'react-sound'
import axios from 'axios'
import './Ella.css'


class Ella extends Component {
  constructor(){
    super();
    this.state = {
      audio: null,
      rendered: false
    }
    this.getAudio = this.getAudio.bind(this);
  }

  componentDidMount() {
    window.setTimeout(()=> {this.setState({rendered:true})}, 8500)
    this.getAudio();
  }
  
  getAudio() {
    axios.get(`${process.env.REACT_APP_API_URL}/my-audios?ella`)
    .then(resAudio =>{
      const theAudio = resAudio.data[0].ella
      this.setState({audio: theAudio});
    })
    .catch((err)=>{
      throw new Error(err);
    })
  } 
   
  
  render() {
    if (this.state.rendered) {
      return ( <Redirect to='/qwishes' />)
     } else {
      return (
        <div className='artist-page ella'>
          {this.state.audio && 
          <Sound 
              url={this.state.audio}
              playStatus={Sound.status.PLAYING}
              autoLoad={true}
              onLoading={this.teste}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          }
          <div>
            <button onClick={this.getAudio} className='central-artist'>Ella Fitzgerald</button>
          </div>
        </div>
      )
    }
  }
}


export default Ella;