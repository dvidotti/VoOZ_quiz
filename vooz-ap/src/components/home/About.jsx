import React from 'react';
import './About.css'


const description = `O VoOZ quiz foi desenvolvido para descobrir mais sobre a sua voz. \n
Após passar por todas as etapas você pode acessar suas características vocais e descobrir algumas dicas que podem ajudar seu canto a soar ainda melhor!`

const About = (props) => {
  return(
  <div className="about">
    <div className="about-header">
      <h1 className="about-title">VoOZ Quiz</h1>
      <button className="about-close" onClick={props.toogleActive}>X</button>
    </div>
    <p className="about-description">{description}</p>
  </div>
  )
}

export default About;
