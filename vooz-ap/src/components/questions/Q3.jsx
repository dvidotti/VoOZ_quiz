import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import Footer from '../footer/Footer' 

class Q3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      level:""
    }
    this.getAnswer = this.getAnswer.bind(this);
  }

  getAnswer(value) {
    if(value === 1) {
      this.setState({level: 'intermediário'}, () => {
        this.props.getLevel('level', this.state.level);
      });
    } if(value === 2) {
      this.setState({level:'iniciante'}, () => {
        this.props.getLevel('level', this.state.level);
      });
    }
  }

    render() {
      return(
        <div>
          <div className="full-page-white">
            <FormTwo 
              getAnswer={this.getAnswer} 
              label='E agora como foi?' 
              input1='Fácil' 
              input2='Difícil' 
              option1='/qRange' 
              option2='/qRange'
            />
            <div className='legend-block-black'>
              <img className="legend-white" src={'/img/Legenda 4 Mobile.svg'} alt="progress"/>
            </div>
          </div>
          <Footer /> 
        </div>
      )
    }
}

export default Q3;

