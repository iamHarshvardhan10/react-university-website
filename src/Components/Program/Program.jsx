import React from 'react';

import assest2 from '../../assets/asset 2.jpeg'

import assest3 from '../../assets/asset 3.jpeg'



const Program = () => {
  return (
    <div className="programContainer">
      <div className="programInfo">
        <h2>Programs We Offer</h2>
        <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
      </div>

      <div className="programCard">
        <div className="programInfo">
          <img src={assest2} alt="" />
          <h2>Faculty of Science</h2>
          <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
          <button>Learn More</button>
          <div className="line"></div>
        </div>

        <div className="programInfo">
          <img src={assest3} alt="" />
          <h2>Faculty of Art</h2>
          <p>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit sit amet condimentum.</p>
          <button>Learn More</button>
          <div className="line"></div>
        </div>
      </div>

    </div>
  )
}

export default Program;