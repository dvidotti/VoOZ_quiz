import React, { Component } from 'react'
import FormFour from '../forms/form-four/FormFour'
import '../play/Play.css'
import FooterWhite from '../footer/FooterWhite'

class QWishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whishes: ''
    }
    this.getAnswerWishes = this.getAnswerWishes.bind(this);
  }
  
  getAnswerWishes(value){
    if(value === 1) {
        this.setState({ wishes: 'Ser Feliz'}, () => {
          this.props.getWishes('wishes','Ser Feliz')
        })
    } if(value === 2) {
        this.setState({ wishes: 'Ser Famoso'}, () => {
          this.props.getWishes('wishes','Ser Famoso')
        })
      } if(value === 3) {
          this.setState({ wishes: 'Sair do Chuveiro'}, () => {
            this.props.getWishes('wishes','Sair do Chuveiro')
          })
        } if(value === 4) {
            this.setState({ wishes: 'Cantar Melhor'}, () => {
              this.props.getWishes('wishes','Cantar Melhor')
            })
          }
  }
  

  render() {
    return(
      <div className="full-page-black">
        <FormFour 
          wishes
          getAnswerWishes= {this.getAnswerWishes}
          label='Você quer cantar para?' 
          input1='Ser Feliz' 
          input2='Ser Famoso' 
          input3='Sair do Chuveiro'
          input4='Cantar Melhor' 
          option1='/yourvoice' 
          option2='/yourvoice' 
          option3='/yourvoice' 
          option4='/yourvoice'  
        />
        <div className='legend-block-white'>
          <img className="legend-white" src={'/img/Legenda 11 Mobile.svg'} alt="progress"/>
        </div>
        <div className='footer-white'>
          <FooterWhite /> 
        </div>
      </div>
    )
  }
}

export default QWishes;
