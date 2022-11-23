import React from 'react'
import { Link } from 'react-router-dom'
import shoe1 from '../assets/shoe1.png'


const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">JORDAN I RETRO HIGH</p>
        <h3>Shattered Backboard 3.0</h3>
        <img src={shoe1} className="hero-banner-image" />

        <Link to="/products">
          <button type="button">SHOP NOW</button>
        </Link>
        {/* <div className="desc">
          <h5>OTHER COLORWAYS AVAILABLE</h5>
          <p>OTHER</p>
        </div> */}
      </div>

    </div>
  )
}

export default HeroBanner