import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../../navbar/NavBar'
import './FormTwoBlack.css'


class FormTwoBlack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect1: false,
      isSelect2: false,
    }
    this.statusSelect1 = this.statusSelect1.bind(this);
    this.statusSelect2 = this.statusSelect2.bind(this);
  
  }

  statusSelect1() {
    this.setState({
      isSelect1: true
    });  
  }
  
  statusSelect2() {
    this.setState({
      isSelect2: true
    });  
  }



  render() {
    if(this.state.isSelect1) {
      return <Redirect to={this.props.option1} /> 
    } if(this.state.isSelect2) {
        return <Redirect to={this.props.option2}/> 
      } 
    return(
      <div className='full-page'>
        <NavBar />
        <h1 className='box-question-voice'>{this.props.label}</h1>
        <div className='answer-up-box'>
          <button className='answer1-box' onClick={this.statusSelect1}><p>{this.props.input1}</p></button> 
          <button className='answer2-box'  onClick={this.statusSelect2}><p>{this.props.input2}</p></button> 
        </div>
      </div>
    )
  }
}

export default FormTwoBlack;
