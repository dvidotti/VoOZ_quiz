import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import Footer from '../footer/Footer'

class Q1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      level:""
    }
    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer(value) {
    if(value === 1) {
      this.setState({level: 'iniciante'});
    } if(value === 2) {
      this.setState({level:'intermediário'});
    }
  }

  
  render() {
    return(
      <div>
        <div className="full-page-white">
          <FormTwo getAnswer={this.getAnswer} label='O que você achou?' input1='Fácil' input2='Difícil' option1='/play2' option2='/play3'/>
          <div className='legend-block-black'>
            <img className="legend-white" src={'/img/Legenda 2 Mobile.svg'} alt="progress"/>
          </div>
        </div>
        <Footer />  
      </div>
    )
  }
}

export default Q1;

