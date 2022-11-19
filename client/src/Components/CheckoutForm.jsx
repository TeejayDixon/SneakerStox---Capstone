import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import useCurrentCart from '../CartContext'
import useSneaker from '../SneakerContext'

const CheckoutForm = () => {

  const cartRef = useRef()
  const { cartItems,
    setCartItems,
    totalQuantities,
    setTotalQuantities,
    totalPrice,
    setTotalPrice,
    setShowCart,
    showCart } = useCurrentCart()
  const { sneakers } = useSneaker()

  let foundProduct;
  let index;

  const onRemove = (sneakers) => {
    foundProduct = cartItems.find((item) => item.id === sneakers.id);

    const newCartItems = cartItems.filter((item) => item.id !== sneakers.id);
    setTotalPrice((prevTotalPrice) => 0 && prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => 0 && prevTotalQuantities - foundProduct.quantity)
    setCartItems(newCartItems);
  }


  return (

    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={() => setShowCart()}>

          <AiOutlineLeft />
          <span className="heading">In Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your Cart Is Empty</h3>
            <Link to="/">
              <button type="button" onClick={() => setShowCart(false)}
                className="btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item,
            index) => (
            <div className="product" key={item.id}>
              <img src={item.image} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.estimatedMarketValue}</h4>
                </div>
                <div className="flex bottom">
                  <p>


                  </p>
                </div>
                <button
                  type="button"
                  className="remove-item"
                  onClick={onRemove}
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick="">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default CheckoutForm