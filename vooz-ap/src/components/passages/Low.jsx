import React, { Component }from 'react'
import { Redirect } from 'react-router-dom'
import Sound from 'react-sound'
import axios from 'axios'
import './Low.css'


class Low extends Component {
  constructor(){
    super();
    this.state = {
      audio: null,
      rendered: false
    }
    this.getAudio = this.getAudio.bind(this);
  }

  componentDidMount() {
    window.setTimeout(()=> {this.setState({rendered:true})}, 6000)
    this.getAudio();
  }
  
  getAudio() {
    axios.get(`${process.env.REACT_APP_API_URL}/my-audios`)
    .then(resAudio =>{
      const theAudio = resAudio.data[0].low
      this.setState({audio: theAudio});
    })
    .catch((err)=>{
      throw new Error(err);
    })
  } 
   
  
  render() {
    if (this.state.rendered) {
      return ( <Redirect to='/qintensity' />)
     } else {
      return (
        <div className='artist-page low'>
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


export default Low;