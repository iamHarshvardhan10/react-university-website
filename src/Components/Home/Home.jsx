import React from 'react';
import Homes from '../../assets/asset 13.jpeg';

import assest1 from '../../assets/asset 1.jpeg'

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="Home">
        <img src={Homes} alt="" />

        <div className="HomeInfo">
          <h3>Education & School</h3>
          <h1>Showcase courses, Events and more</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut cumque ullam eos qui distinctio neque!</p>

          <button>Get Started Now</button>
        </div>
      </div>

      <div className="approach">
        <div className="approachFlex">
          <img src={assest1} alt="" />

          <div className="approachInfo">
            <h2>A COMPREHENSIVE TEACHING APPROACH</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, laborum alias deserunt molestias debitis veritatis eos possimus sed assumenda quo inventore. Obcaecati distinctio quas rem odio facere veritatis quia eos dicta a et placeat possimus aperiam tempora excepturi cumque in, dolorum quibusdam incidunt. Sapiente aliquid quia incidunt harum. Iste, a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos in sed nulla deserunt laborum exercitationem culpa. Doloremque, harum molestiae!</p>

            <button>Learn More</button>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;