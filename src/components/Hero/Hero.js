import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.jpg'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='herptext'>
        <h1>We ensure better education for a better world</h1>
        <p>At PrimaFelicitas, with our AI consultation services, we address all your queries and concerns, 
            assisting you with your proposed AI solution with our best-in-class AI consultation.</p>
            <button className='btn'>Explore More <img src={arrow} alt="" className='arrowimg'/></button>
      </div>
    </div>
  )
}

export default Hero
