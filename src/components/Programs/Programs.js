import React from 'react'
import './Programs.css'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'
import banner from '../../assets/banner.jpg'
import group1 from '../../assets/Group (27).png'
import group2 from '../../assets/Group (28).png'
import group3 from '../../assets/Group (30).png'

const Programs = () => {
  

  return (
    <div className='programs container'>
      <div className='program'>
        <img src={hero2} alt='' />
        <div className='caption'>
            <img src={group1} alt='' />
            <p>Machine Learning</p>
        </div>
      </div>
      <div className='program'>
        <img src={hero3} alt='' />
        <div className='caption'>
            <img src={group2} alt='' />
            <p>Machine Learning</p>
        </div>
      </div>
      <div className='program'>
        <img src={banner} alt='' />
        <div className='caption'>
            <img src={group3} alt='' />
            <p>Machine Learning</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
