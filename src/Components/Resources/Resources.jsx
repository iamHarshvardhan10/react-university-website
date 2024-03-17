import React from 'react';

import { FaArrowRight } from 'react-icons/fa';
import assest5 from '../../assets/asset 14.jpeg'

const Resources = () => {
  return (
    <div className="ResourceContainer">
      <div className="resource">
        <div className="resourceInfo">
          <h1>Essential resouces</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid assumenda earum soluta repellat? Harum maxime commodi nihil possimus cum?</p>

          <div className="ResourceCard">
            <div className="cardInfo">
              <h3>First Year Student</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem dolores reprehenderit autem accusamus fugiat in vel totam aut alias.</p>
              <span><FaArrowRight /></span>
            </div>
            <div className="cardInfo">
              <h3>Tuition & Fees</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem dolores reprehenderit autem accusamus fugiat in vel totam aut alias.</p>
              <span><FaArrowRight /></span>
            </div>
            <div className="cardInfo">
              <h3>International Students</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem dolores reprehenderit autem accusamus fugiat in vel totam aut alias.</p>
              <span><FaArrowRight /></span>
            </div>
          </div>
        </div>

        <div className="resourceImage">
          <img src={assest5} alt="" />
        </div>
      </div>

    </div>
  )
}


export default Resources;