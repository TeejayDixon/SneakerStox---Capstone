import React from 'react'
import { Link } from 'react-router-dom'
import shoe4 from '../assets/shoe2.png'


const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>AVAILABLE NOW</p>
          <h3>10% OFF</h3>
          {/* <h3>LARGE TEXT 2</h3> */}
          <p>24HR SALE</p>
        </div>
        <div className="right">
          <p>AIR JORDAN IV</p>
          <h3>TRAVIS SCOTT </h3>
          {/* <p>DESCRIPTION</p> */}
          <Link to="/products">
            <button type="button">
              SHOP NOW
            </button>
          </Link>
        </div>
        <img src={shoe4} className="footer-banner-image" width={600} />
      </div>
    </div>
  )
}

export default FooterBanner