import React from 'react';
import logo from '../../assets/asset 0.png';

import {GrFacebook, GrInstagram, GrTwitter , GrYoutube  } from 'react-icons/gr';


const NavBar = () => {
  return (
    <div className="NavbarContainer">
      <div className="NavBar">
        <img src={logo} alt="" />

       
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
      

        <div className="socialLinks">
          <div className="contact">
            <span>Call Us:</span>
            <span>8108424368</span>
          </div>
          <div className="SocialIcons">
            <span><GrFacebook className='icons'/></span>
            <span><GrInstagram className='icons'/></span>
            <span><GrTwitter className='icons'/></span>
            <span><GrYoutube className='icons'/></span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;