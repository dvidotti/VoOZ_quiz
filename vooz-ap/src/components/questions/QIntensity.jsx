import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import Footer from '../footer/Footer' 


class QIntensity extends Component {
  constructor(props){
    super(props);
    this.state = {
      intensity: ''
    }
    this.getAnswerIntensity = this.getAnswerIntensity.bind(this);
  }

    getAnswerIntensity(value) {
      if(value === 1) {
        this.setState({intensity: 'baixinho'}, () => {
          this.props.getIntensity('intensity', this.state.intensity);
        });
      } if(value === 2) {
        this.setState({intensity: 'vozeirão'}, () => {
          this.props.getIntensity('intensity', this.state.intensity);
        });
      }
    }

    render() {
      return(
        <div>
          <div className="full-page-white">
            <FormTwo 
              intensity
              getAnswerIntensity= {this.getAnswerIntensity}
              label='Você quando canta sai?' 
              input1='Baixinho' 
              input2='Vozeirão' 
              option1='/qlight' 
              option2='/qstrong'
            />
            <div className='legend-block-black'>
              <img className="legend-white" src={'/img/Legenda 6 Mobile.svg'} alt="progress"/>
            </div>
          </div>
          <Footer /> 
        </div>
      )
    }
}

export default QIntensity;

