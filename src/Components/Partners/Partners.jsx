import React from 'react';

import assest7 from '../../assets/asset 7.png'
import assest8 from '../../assets/asset 8.png'
import assest9 from '../../assets/asset 9.png'
import assest10 from '../../assets/asset 10.png'

import assest15 from '../../assets/asset 15.jpeg';

const Partners = () => {
  return (
    <div className="partnerContainer">
      <div className="partnerInfo">

        <div className="partners">
          <h1>Our Partners</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officiis illum repudiandae repellendus suscipit animi ab consectetur. A, veniam perspiciatis!</p>
        </div>

        <div className="partnersCard">
          <div className="card">
            <img src={assest7} alt="" />
            <img src={assest8} alt="" />
            <img src={assest9} alt="" />
            <img src={assest10} alt="" />
          </div>
        </div>
      </div>

      <div className="studentContainer">
        <div className="card">
          <img src={assest15} alt="" />
        </div>

        <div className="cardInfo">
          <h1>Trusted By Over 6000+ Students</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sit quae eligendi sed, cumque nisi voluptas, fugit laudantium alias delectus illum perspiciatis aspernatur unde nemo! Autem ea obcaecati quia quae!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias voluptates corporis, fugit qui nulla quae libero voluptate! Quis, similique provident.</p>

          <button>Join Now</button>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default Partners;