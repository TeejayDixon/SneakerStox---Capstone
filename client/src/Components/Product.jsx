import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useSneaker from '../SneakerContext'
import useCurrentUser from '../UserContext'
import { toast } from 'react-hot-toast'
import { Heart } from "pretty-interaction-icons"


const Product = () => {


  const navigate = useNavigate()
  const { sneakers, setSneakers } = useSneaker()
  const { current, setCurrentUser } = useCurrentUser()
  const [wishlist, setWishList] = useState([])








  const handleAddToWishList = (item) => {

    fetch(`/wishitems`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sneaker_id: item.id,
        user_id: current.id
      })
    })
      .then(res => res.json())
      .then(data => setSneakers(
        [...wishlist, data]
      ))
    toast.success(`${item.name} added to the wishlist.`);
  }


  const cardItems = (item) => {

    return (
      <div onClick={() => navigate(`/products/${item.id}`)}>

        <div className="product-card">
          <img
            alt="shoeimage"
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
        <div>
          <Heart onClick={() => handleAddToWishList(item)}
            size="extraSmall"
            color="danger"
            ringColor="green"
            ringSize="extraSmall"
            hasShrink
            hasRings
            labelPosition="top" />
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