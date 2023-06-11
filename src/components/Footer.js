import React from 'react';
// import Logo from './assets/Logo.svg';
import { BsTwitter } from 'react-icons/bs';
// import { SiLinkdin } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper' >

        <div className='footer-section-one' >
            <div className='foorter-logo-container' >
                {/* <img src={Logo} alt=''/> */}
                <h1 className='primary-heading'>FOODI</h1>
            </div>
            <div className='footer-icons' >
                <BsTwitter/>
                <FaLinkedin/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>

        <div className='footer-section-two' >

            <div className='footer-section-columns' >
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonial</span>
                <span>Work</span>
            </div>

            <div className='footer-section-columns' >
                <span>111-444-333</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>

            <div className='footer-section-columns' >
                <span>Terms & conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>

    </div>
  )
}

export default Footer