import React, { useState, useEffect } from 'react'
import useSneaker from '../SneakerContext'
import useCurrentUser from '../UserContext'
import { useNavigate } from 'react-router-dom'


const WishList = () => {

  const { sneakers } = useSneaker()
  const { current, setCurrentUser } = useCurrentUser()
  const [currentWishes, setCurrentWishes] = useState([])
  const [sneaks, setSneaks] = useState([])


  let navigate = useNavigate()

  useEffect(() => {
    fetch(`/wishitems`)
      .then(r => r.json())
      .then(data => setSneaks(data)
      )
  }, []);





  const cardItems = (item) => {

    return (
      <div onClick={() => navigate(`/products/${item.sneaker.id}`)}>

        <div className="product-card">
          <img
            src={item.sneaker.image}
            width={250}
            height={250}
            className="product-image" />
          <p className="product-name">
            {item.sneaker.name}
          </p>
          <p className="product-price">
            ${item.sneaker.estimatedMarketValue}
          </p>

        </div>
      </div>
    )
  }






  return (
    <>
      <div className="products-heading">
        <h2>WishList</h2>
        <p>Save your favorites here for later purchases</p>
      </div>
      <div className="products-container">
        {sneaks.map(cardItems)}
      </div>
    </>
  )
}

export default WishList