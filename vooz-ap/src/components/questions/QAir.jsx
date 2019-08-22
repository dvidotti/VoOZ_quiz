import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import Footer from '../footer/Footer' 


class QAir extends Component {
  constructor(props){
    super(props);
    this.state = {
      air: ''
    }
    this.getAnswerAir = this.getAnswerAir.bind(this);
  }

    getAnswerAir(value) {
      const faltaAr = 'Falta Ar';
      const sobraAr = 'Sobra Ar';
      if(value === 2) {
        this.setState({air: faltaAr }, () => {
          this.props.getAir('air', this.state.air);
        });
      } if(value === 1) {
        this.setState({air: sobraAr}, () => {
          this.props.getAir('air', this.state.air);
        });
      }
    }

    render() {
      return(
        <div>
          <div className="full-page-white">
            <FormTwo 
              air
              getAnswerAir= {this.getAnswerAir}
              label='Falta ar?' 
              input1='Sim, às vezes !' 
              input2='Não, raramente' 
              option1='/breath' 
              option2='/breath'
            />
            <div className='legend-block-black'>
              <img className="legend-white" src={'/img/Legenda 7 Mobile.svg'} alt="progress"/>
            </div>
        </div>
          <Footer /> 
        </div>
      )
    }
}

export default QAir;

