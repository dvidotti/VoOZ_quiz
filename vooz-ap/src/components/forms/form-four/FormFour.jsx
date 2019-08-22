import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NavBarBlack from '../../navbar/NavBarBlack'
import '../form-four/FormFour.css'


class FormFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect1: false,
      isSelect2: false,
      isSelect3: false,
      isSelect4: false,
    }
    this.statusSelect1 = this.statusSelect1.bind(this);
    this.statusSelect2 = this.statusSelect2.bind(this);
    this.statusSelect3 = this.statusSelect3.bind(this);
    this.statusSelect4 = this.statusSelect4.bind(this);
  }

  statusSelect1() {
    if (this.props.artists) {
      this.setState({ isSelect1: true }, this.props.getAnswerArtist(1));
    } else if (this.props.mpb) {
        this.setState({ isSelect1: true }, this.props.getAnswerArtistMpb(1));
      } else if (this.props.pop) {
          this.setState({ isSelect1: true }, this.props.getAnswerArtistPop(1));
        } else if (this.props.rock) {
            this.setState({ isSelect1: true }, this.props.getAnswerArtistRock(1));
          } else if (this.props.wishes) {
             this.setState({ isSelect1: true }, this.props.getAnswerWishes(1));
            } else {
                this.setState({ isSelect1: true }, this.props.getAnswerFour(1));  
              } 
  }
  
  statusSelect2() {
    if (this.props.artists) {
      this.setState({ isSelect2: true }, this.props.getAnswerArtist(2));
    } else if (this.props.mpb) {
        this.setState({ isSelect2: true }, this.props.getAnswerArtistMpb(2));
      } else if (this.props.pop) {
          this.setState({ isSelect2: true }, this.props.getAnswerArtistPop(2));
        } else if (this.props.rock) {
            this.setState({ isSelect2: true }, this.props.getAnswerArtistRock(2));
          } else if (this.props.wishes) {
            this.setState({ isSelect2: true }, this.props.getAnswerWishes(2));
            } else {
              this.setState({ isSelect2: true }, this.props.getAnswerFour(2));  
              }  
  }

  statusSelect3() {
    if (this.props.artists) {
      this.setState({ isSelect3: true }, this.props.getAnswerArtist(3));
    } else if (this.props.mpb) {
        this.setState({ isSelect3: true }, this.props.getAnswerArtistMpb(3));
      } else if (this.props.pop) {
          this.setState({ isSelect3: true }, this.props.getAnswerArtistPop(3));
        } else if (this.props.rock) {
            this.setState({ isSelect3: true }, this.props.getAnswerArtistRock(3));
          } else if (this.props.wishes) {
             this.setState({ isSelect3: true }, this.props.getAnswerWishes(3));
            } else {
                this.setState({ isSelect3: true }, this.props.getAnswerFour(3));  
            } 
  }

  statusSelect4() {
    if (this.props.artists) {
      this.setState({ isSelect4: true }, this.props.getAnswerArtist(4));
    } else if (this.props.mpb) {
        this.setState({ isSelect4: true }, this.props.getAnswerArtistMpb(4));
      } else if (this.props.pop) {
          this.setState({ isSelect4: true }, this.props.getAnswerArtistPop(4));
        } else if (this.props.rock) {
            this.setState({ isSelect4: true }, this.props.getAnswerArtistRock(4));
          } else if (this.props.wishes) {
            this.setState({ isSelect4: true }, this.props.getAnswerWishes(4));
            } else {
                this.setState({ isSelect4: true }, this.props.getAnswerFour(4));  
              } 
  }

  render() {
    if(this.state.isSelect1) {
      return <Redirect to={this.props.option1} /> 
    } if(this.state.isSelect2) {
        return <Redirect to={this.props.option2}/> 
      } if(this.state.isSelect3) {
        return <Redirect to={this.props.option3}/>
        } if(this.state.isSelect4) {
          return <Redirect to={this.props.option4}/>
        }  
    return(
      <div className='full-page-black'>
        <div className='navbar-white'>
          <NavBarBlack />
        </div>
        <div className='box-question-black'>
           <h1 >{this.props.label}</h1>
        </div>
        <section className="big-box">
          <div className='answer-up-box-black '>
            <button className='answer1-box-black ' onClick={this.statusSelect1}><p className="text-button-form">{this.props.input1}</p></button> 
            <button className='answer2-box-black '  onClick={this.statusSelect2}><p className="text-button-form">{this.props.input2}</p></button> 
          </div>
          <div className='answer-bottom-box-black '>
            <button className='answer3-box-black'  onClick={this.statusSelect3}><p className="text-button-form">{this.props.input3}</p></button> 
            <button className='answer4-box-black '  onClick={this.statusSelect4}><p className="text-button-form">{this.props.input4}</p></button> 
          </div>
        </section>
      </div>
    )
  }
}

export default FormFour;
