import React, { Component }from 'react'
import { Redirect } from 'react-router-dom'
import Sound from 'react-sound'
import axios from 'axios'
import './High.css'


class High extends Component {
  constructor(){
    super();
    this.state = {
      audio: null,
      rendered: false
    }
    this.getAudio = this.getAudio.bind(this);
  }

  componentDidMount() {
    window.setTimeout(()=> {this.setState({rendered:true})}, 3000)
    this.getAudio();
  }
  
  getAudio() {
    axios.get(`${process.env.REACT_APP_API_URL}/my-audios?high`)
    .then(resAudio =>{
      const theAudio = resAudio.data[0].high
      this.setState({audio: theAudio});
    })
    .catch((err)=>{
      throw new Error(err)
    })
  } 
   
  
  render() {
    if (this.state.rendered) {
      return ( <Redirect to='/qintensity' />)
     } else {
      return (
        <div className='artist-page high'>
          {this.state.audio && 
          <Sound 
              url={this.state.audio}
              playStatus={Sound.status.PLAYING}
              autoLoad={true}
            />
          }
        </div>
      )
    }
  }
}


export default High;