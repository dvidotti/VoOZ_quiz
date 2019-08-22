import React, { Component } from 'react'
import FormTwo from '../forms/form-two/FormTwo'
import '../play/Play.css'
import Footer from '../footer/Footer' 


class QRange extends Component {
  constructor(props){
    super(props);
    this.state = {
      range: ''
    }
    this.getAnswerRange = this.getAnswerRange.bind(this);
  }

  getAnswerRange(value) {
    if(value === 1) {
      this.setState({range:'grave'}, () => {
        this.props.getRange('range', this.state.range);
      });
    } if(value === 2) {
      this.setState({range:'aguda'}, () => {
        this.props.getRange('range',this.state.range);
      });
    }
  }

  render() {
    return(
      <div>
        <div className="full-page-white">
          <FormTwo 
            range
            getAnswerRange= {this.getAnswerRange}
            label='Você acha sua voz?' 
            input1='Grave' 
            input2='Aguda' 
            option1='/low' 
            option2='/high'
          />
          <div className='legend-block-black'>
            <img className="legend-white" src={'/img/Legenda 5 Mobile.svg'} alt="progress"/>
          </div>
      </div>
        <Footer /> 
      </div>
    )
  }
}

export default QRange;

