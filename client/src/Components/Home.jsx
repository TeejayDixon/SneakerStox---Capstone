import React from 'react'
import HeroBanner from './HeroBanner'
import FooterBanner from './FooterBanner'
import Product from './Product'



const Home = () => {



  return (
    <div>

      <HeroBanner />

      <div className="products-heading">
        <h2 className="title-name">CATALOG</h2>
        <p>Build your sneaker collection</p>
      </div>

      <>
        <Product />
      </>


      <>
        <FooterBanner />
      </>

    </div>
  )
}

export default Home