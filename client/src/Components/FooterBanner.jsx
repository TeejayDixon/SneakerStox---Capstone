import React from 'react'
import { Link } from 'react-router-dom'


const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>TEXT</p>
          <h3>LARGE TEXT1</h3>
          <h3>LARGE TEXT 2</h3>
          <p>SALE TIME</p>
        </div>
        <div className="right">
          <p>SMALL TEXT</p>
          <h3>MID TEXT</h3>
          <p>DESCRIPTION</p>
          <Link to="">
            <button type="button">
              TEXT
            </button>
          </Link>
        </div>
        <img src="" className="footer-banner-image" />
      </div>
    </div>
  )
}

export default FooterBanner