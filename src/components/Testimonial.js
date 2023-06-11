import React from 'react';
import ProfilePic from './assets/john-doe-image.png';
import {AiFillStar} from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrapper' >
        <div className='work-section-top' >
            <p className='primary-subheading' >Testimonial</p>
            <h1 className='primary-heading' >What They Are Saying</h1>
            <p className='primary-text' >He mazhe hotel aahe aani eth khup chan dishes bhetat tumhi dekhil nakki ya aani 
            try kara tuzhe avdte Meher Veg</p>
        </div>
        <div className='testimonial-section-bottom' >
            <img src={ProfilePic} alt='' />
            <p>He mazhe hotel aahe aani eth khup chan dishes bhetat tumhi dekhil nakki ya aani 
            try kara tuzhe avdte Meher Veg</p>
            <div className='testimonials-stars-container' >
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonial;