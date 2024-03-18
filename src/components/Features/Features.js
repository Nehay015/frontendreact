import React from 'react'
import './Features.css'
import icon1 from '../../assets/hero1.jpg'
import icon2 from '../../assets/hero2.jpg'
import icon3 from '../../assets/hero3.jpg'

const Features = () => {
  return (
    <>
    <div className='feature'>
        <div className='container featuresd'>
         <div className='features '>
        <div className='captions'>
            <img src={icon1} alt='' />
            <p>Machine Learning</p>
        </div>
      </div>
      <div className='features'>
        <div className='captions'>
            <img src={icon2} alt='' />
            <p>Machine Learning</p>
        </div>
      </div>
      <div className='features'>
        <div className='captions'>
            <img src={icon3} alt='' />
            <p>Machine Learning</p>
        </div>
      </div>
      <div className='features '>
        <div className='captions'>
            <img src={icon1} alt='' />
            <p>Machine Learning</p>
        </div>
      </div>
      <div className='features'>
        <div className='captions'>
            <img src={icon2} alt='' />
            <p>Machine Learning</p>
        </div>
      </div>
      
      </div>
      
    </div>
    <div className='container cfv'>
    <p className='phn'>FEATURES</p>
      <h3 className='phns'>Our Features Services</h3>
      <p className='phnss'>Many factors influence the success of education. Psychological factors include motivation, 
        intelligence, and personality. Social factors, such as socioeconomic status, ethnicity, and gender.</p>
    <button className='btn1'>Explore More</button>
    </div>
    </>
  )
}

export default Features
