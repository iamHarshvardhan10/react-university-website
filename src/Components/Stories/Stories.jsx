import React from 'react';

import assest4 from '../../assets/asset 4.jpeg'
import assest5 from '../../assets/asset 5.jpeg'
import assest6 from '../../assets/asset 6.jpeg'

const Stories = () => {
  return (
   <div className="storiesContainer">
    <div className="storiesHead">
      <h1>
        Top Strories
      </h1>
    </div>

    <div className="storiesCard">
      <div className="card">
        <img src={assest4} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fuga, exercitationem veritatis id dolor non. Laudantium aut harum voluptas atque nobis iure reiciendis rem nam!</p>
      </div>
      <div className="card">
        <img src={assest5} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fuga, exercitationem veritatis id dolor non. Laudantium aut harum voluptas atque nobis iure reiciendis rem nam!</p>
      </div>
      <div className="card">
        <img src={assest6} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fuga, exercitationem veritatis id dolor non. Laudantium aut harum voluptas atque nobis iure reiciendis rem nam!</p>
      </div>
    </div>
   </div>
  )
}

export default Stories;