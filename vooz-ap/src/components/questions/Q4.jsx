import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import '../play/Play.css'
import FooterWhite from '../footer/FooterWhite'



class Q4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: ''
    }
    this.getAnswerFour = this.getAnswerFour.bind(this);
  }

  getAnswerFour(value){
    if(value === 1) {
      this.setState({ style: 'Jazz'}, () => {
        this.props.getStyle('style' ,'Jazz')
      })
    } if(value === 2) {
      this.setState({ style: 'Rock'}, () => {
        this.props.getStyle('style','Rock')
      })
      } if(value === 3) {
        this.setState({ style: 'Pop'}, () => {
          this.props.getStyle('style','Pop')
        })
        } if(value === 4) {
          this.setState({ style: 'Mpb'}, () => {
            this.props.getStyle('style','Mpb')
          })
          }
  }
     
  render() {
      return(
        <div >
          <FormFour 
          getAnswerFour={this.getAnswerFour}
          label='Falando de estilo, você prefere?' 
          input1='Jazz' 
          input2='Rock' 
          input3='Pop'
          input4='MPB' 
          option1='/qjazz' 
          option2='/qrock'
          option3='/qpop'
          option4='/qmpb' 
          />
          <div className='legend-block-white'>
            <img className="legend-white" src={'/img/Legenda 9 Mobile.svg'} alt="progress"/>
          </div>
          <div className='footer-white'>
            <FooterWhite /> 
          </div>
        </div>
      )
    }
}

export default Q4;

