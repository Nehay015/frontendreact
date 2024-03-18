import React from 'react'
import './Blogs.css'
import people1 from '../../assets/people1.jpg'
import people2 from '../../assets/pexels-mark-dalton-439818.jpg'
import people3 from '../../assets/people3.jpg'
import bookmark from '../../assets/bookmark.svg'

const Blogs = () => {
  return (
    <div className='container blogsd'>
         <div className='blogs '>
        <div className='captions'>
            <img src={people1} alt='' />
            <h3 className='fds'>Factors Of Educational Success</h3>
            <p>Educational success, also referred to as student and academic achievement, pertains to the extent to which educational objectives are met, such as the acquisition of...</p>
            <div className='blogd'>
                <div className='blog-left'>
                <img src={people1} alt=''  />
                <h3>John Sham's <br />
                <p className='fvb'>15 Aug, 2023</p></h3>
                </div>
                <div className='blog-right'>
                <img src={bookmark} alt='' />
                 </div>
            </div>
        </div>
      </div>
      <div className='blogs'>
      <div className='captions'>
            <img src={people2} alt='' />
            <h3 className='fds'>Factors Of Educational Success</h3>
            <p>Educational success, also referred to as student and academic achievement, pertains to the extent to which educational objectives are met, such as the acquisition of...</p>
            <div className='blogd'>
                <div className='blog-left'>
                <img src={people2} alt=''  />
                <h3>John Sham's <br />
                <p className='fvb'>15 Aug, 2023</p></h3>
                </div>
                <div className='blog-right'>
                <img src={bookmark} alt='' />
                 </div>
            </div>
        </div>
      </div>
      <div className='blogs'>
      <div className='captions'>
            <img src={people3} alt='' />
            <h3 className='fds'>Factors Of Educational Success</h3>
            <p>Educational success, also referred to as student and academic achievement, pertains to the extent to which educational objectives are met, such as the acquisition of...</p>
            <div className='blogd'>
                <div className='blog-left'>
                <img src={people3} alt=''  />
                <h3>John Sham's <br />
                <p className='fvb'>15 Aug, 2023</p></h3>
                </div>
                <div className='blog-right'>
                <img src={bookmark} alt='' />
                 </div>
            </div>
        </div>
      </div>
      </div>   
  )
}

export default Blogs
