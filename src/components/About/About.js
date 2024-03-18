import React from 'react'
import './About.css'
import aboutimg from '../../assets/banner.jpg'
import playic from '../../assets/play.svg'

const About = () => {

  return (
    <div className='about container'>
      <div className='about-left'>
        <img src={aboutimg} alt='' className='aboutimg' />
        <img src={playic} alt='' className='playic'/>
      </div>
      <div className='about-right'>
         <h3>About University</h3>
         <h2>Nurturing Tomorrow's Leader Today</h2>
         <p>Education is the transmission of knowledge, skills, and character traits and manifests in various forms.
             Formal education occurs within a structured institutional framework,
             such as public schools. Non-formal education also follows a structured approach but 
             occurs outside the formal schooling system</p>
         <p>The precise definition of education is disputed, and there are disagreements about the aims of
             education and the extent to which education differs from indoctrination by fostering critical thinking. 
            These disagreements impact how to identify, measure, and enhance various forms of education. </p>
      </div>
    </div>
  )
}

export default About
