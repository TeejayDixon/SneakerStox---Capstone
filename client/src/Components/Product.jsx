import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from "../CartContext"

const Product = () => {

  const { sneakers } = useContext(CartContext);
  const navigate = useNavigate()




  return (
    <div className="products-container">
      {sneakers.map((item, index) => (
        <div key={index} onClick={navigate(`products/${item.id}`)}>
          <div className="product-card">
            <img
              src={item.image}
              width={250}
              height={250}
              className="product-image"
            />
            <p className="product-name">
              {item.name}
            </p>
            <p className="product-price">
              ${item.estimatedMarketValue}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Product