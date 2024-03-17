import React from 'react';
import assest11 from '../../assets/asset 11.png';

import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">

        <div className="footerColumn1">
          <img src={assest11} alt="" />
        </div>

        <div className="footerColumn1">
          <a href="">Quick Links</a>

          <div className="footerTitle">
            <h3>Work</h3>
            <h3>Services</h3>
            <h3>Products</h3>
            <h3>Tips & Tricks</h3>
          </div>
        </div>
        <div className="footerColumn1">
          <a href="">Programs</a>

          <div className="footerTitle">
            <h3>Air freight</h3>
            <h3>Ocean freight</h3>
            <h3>Large Projects</h3>

          </div>
        </div>
        <div className="footerColumn1">
          <a href="">Resources</a>

          <div className="footerTitle">
            <h3>Air FAQ</h3>
            <h3>Submit Ticket</h3>
            <h3>Contact Us</h3>

          </div>
        </div>

        <div className="footerColumn1">
          <a href="">Newsletter</a>

          <div className="footerNews">
            <p>Subscribe newsletter to get updates.</p>

            <div className="inputField">

            <input type="text" placeholder='Enter Your Email' />
            <button>SEND</button>
            </div>

            <div className="socialLnk">

              <span><FaInstagram className='icon'/></span>
              <span><FaFacebook className='icon'/></span>
              <span><FaLinkedin className='icon'/></span>
              <span><FaYoutube className='icon'/></span>
            </div>
          </div>
        </div>

      </div>

      <div className="line"></div>
      <div className="copyRight">
        Copyright @2023 All Rights reserved | This template is made by with  <span>
          Harsh & codeNcodes
        </span>

      </div>
    </div>
  )
}

export default Footer;