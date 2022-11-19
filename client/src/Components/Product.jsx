import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSneaker from '../SneakerContext'


const Product = () => {


  const navigate = useNavigate()
  const { sneakers } = useSneaker()

  const [wishlist, setWishList] = useState([]);


  useEffect(() => {
    fetch('/wishitems/user')
      .then(res => res.json())
      .then(data => {
        setWishList(data)
      })
  })

  function addToWishList(sneakerID, userID) {
    fetch('/wishlist', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ sneaker_id: sneakerID, user_id: userID })
    })
  }

  function removeFromWishList(sneakerID) {
    fetch(`/wishlist/sneakers/${sneakerID}`, {
      method: 'DELETE'
    })
  }


  const cardItems = (item) => {

    return (
      <div onClick={() => navigate(`/products/${item.id}`)}>

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