import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useSneaker from '../SneakerContext'


const Product = () => {


  const navigate = useNavigate()
  const { sneakers, setSneakers } = useSneaker()

  const cardItems = (item) => {

    return (
      <div onClick={() => navigate(`products/${item.id}`)}>

        <div className="product-card">
          <img
            src={item.image}
            width={250}
            height={250}
            className="product-image" />
          <p className="product-name">
            {item.name}
          </p>
          <p className="product-price">
            ${item.estimatedMarketValue}
          </p>
        </div>

      </div>
    )
  }



  return (
    <div className="products-container">
      {sneakers.map(cardItems)}
    </div>
  )
};

export default Product