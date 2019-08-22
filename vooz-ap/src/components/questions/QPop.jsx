import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import './Q.css'
import FooterWhite from '../footer/FooterWhite'

class QPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    }
    this.getAnswerArtistPop = this.getAnswerArtistPop.bind(this);
  }
  
  getAnswerArtistPop(value){
    if(value === 1) {
        this.setState({ artist: 'Lady Gaga'}, () => {
          this.props.getArtist('artist','Lady Gaga')
        })
    } if(value === 2) {
        this.setState({ artist: 'Beyonce'}, () => {
          this.props.getArtist('artist','Beyonce')
        })
      } if(value === 3) {
          this.setState({ artist: 'Ed Sheran'}, () => {
            this.props.getArtist('artist','Ed Sheran')
          })
        } if(value === 4) {
            this.setState({ artist: 'Maluma'}, () => {
              this.props.getArtist('artist','Maluma')
            })
          }
  }
  

  render() {
    return(
      <div className="full-page-black">
        <FormFour 
        pop
        getAnswerArtistPop= {this.getAnswerArtistPop}
        label='E se você fosse um cantorxs?' 
        input1='Lady Gaga' 
        input2='Beyonce' 
        input3='Ed Sheran'
        input4='Maluma' 
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

export default QPop;
