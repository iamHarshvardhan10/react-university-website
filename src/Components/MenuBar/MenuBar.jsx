import React from 'react'

const MenuBar = () => {
  return (
    <div className="MenuContainer">
      <div className="MenuInfo">
        <div className="MenuTitle">
          <h2>Ends Tomarrow:</h2>
          <span>Join Teachable for $4,800 in bonus cotent</span>
        </div>
        <div className="MenuTime">
          <div className="Days">
            <span>29</span>
            <span>Days</span>
          </div>
          <div className="Days">
            <span>05</span>
            <span>Hrs</span>
          </div>
          <div className="Days">
            <span>12</span>
            <span>Min</span>
          </div>
          <div className="Days">
            <span>58</span>
            <span>Secs</span>
          </div>
          <div className="MenuLink">
            <a href="#Menu">Learn More</a>
            <div className="line"></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MenuBar;