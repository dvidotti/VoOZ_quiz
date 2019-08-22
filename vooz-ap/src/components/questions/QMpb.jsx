import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import '../play/Play.css'
import FooterWhite from '../footer/FooterWhite'

class QMpb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
    this.getAnswerArtistMpb = this.getAnswerArtistMpb.bind(this);
  }
  
  getAnswerArtistMpb(value){
    if(value === 1) {
        this.setState({ artist: 'Caetano Veloso'}, () => {
          this.props.getArtist('artist', 'Caetano Veloso')
        })
    } if(value === 2) {
        this.setState({ artist: 'Maria Rita'}, () => {
          this.props.getArtist('artist','Maria Rita')
        })
      } if(value === 3) {
          this.setState({ artist: 'Gal Costa'}, () => {
            this.props.getArtist('artist','Gal Costa')
          })
        } if(value === 4) {
            this.setState({ artist: 'Djavan'}, () => {
              this.props.getArtist('artist','Djavan')
            })
          }
  }
  

  render() {
      return(
        <div className="full-page-black">
          <FormFour 
          mpb
          getAnswerArtistMpb= {this.getAnswerArtistMpb}
          label='E se você fosse um cantorxs?' 
          input1='Caetano Veloso' 
          input2='Maria Rita' 
          input3='Gal Costa'
          input4='Djavan' 
          option1='/qwishes' 
          option2='/qwishes' 
          option3='/qwishes' 
          option4='/qwishes' 
          />
          <div className='legend-block-white'>
           <img className="legend-white" src={'/img/Legenda 10 Mobile.svg'} alt="progress"/>
          </div>
          <div className='footer-white'>
            <FooterWhite /> 
          </div>
        </div>
        
      )
  }
}

export default QMpb;
