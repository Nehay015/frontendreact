import React, { useRef } from 'react'
import './Testimonial.css'
import nextarrow from '../../assets/next-arrow.svg'
import prevarrow from '../../assets/arrow.svg'
import hero1 from '../../assets/hero1.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'
import hero4 from '../../assets/hero4.jpg'

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;
     const slideForward = ()=>{
        if (tx >-50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;
     }
     const slideBackward = ()=>{
        if (tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    
     }


  return (
    <div className='container testimonial'> 
      <img src={nextarrow} alt='' className='nextbtn' onClick={slideForward} />
      <img src={prevarrow} alt='' className='backbtn' onClick={slideBackward}/>
      <div className='slider' >
           <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={hero1} alt='' />
                        <div>
                            <h3>William Smith</h3>
                            <p>Terpnash, USA</p>
                        </div>
                    </div>
                    <p>Educational success, also referred to as student and academic achievement, pertains to the extent to which educational objectives are met, such as the acquisition of knowledge and skills by students.
                     For practical purposes, it is often primarily measured in terms of official exam scores, 
                     but numerous additional indicators exist,</p>

                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={hero2} alt='' />
                        <div>
                            <h3>William Smith</h3>
                            <p>Terpnash, USA</p>
                        </div>
                    </div>
                    <p>Educational success, also referred to as student and academic achievement, pertains to the extent to which educational objectives are met, such as the acquisition of knowledge and skills by students.
                     For practical purposes, it is often primarily measured in terms of official exam scores, 
                     but numerous additional indicators exist,</p>
                     
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={hero3} alt='' />
                        <div>
                            <h3>William Smith</h3>
                            <p>Terpnash, USA</p>
                        </div>
                    </div>
                    <p>Educational success, also referred to as student and academic achievement, pertains to the extent to which educational objectives are met, such as the acquisition of knowledge and skills by students.
                     For practical purposes, it is often primarily measured in terms of official exam scores, 
                     but numerous additional indicators exist,</p>
                     
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={hero4} alt='' />
                        <div>
                            <h3>William Smith</h3>
                            <p>Terpnash, USA</p>
                        </div>
                    </div>
                    <p>Educational success, also referred to as student and academic achievement, pertains to the extent to which educational objectives are met, such as the acquisition of knowledge and skills by students.
                     For practical purposes, it is often primarily measured in terms of official exam scores, 
                     but numerous additional indicators exist,</p>
                     
                </div>
            </li>
           </ul>
      </div>
    </div>
  )
}

export default Testimonial
