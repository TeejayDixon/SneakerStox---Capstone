import { useParams } from "react-router-dom"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import useCurrentCart from '../../CartContext'
import useCurrentUser from '../../UserContext'
import { toast } from 'react-hot-toast'
import React, { useEffect, useState } from 'react'

const ProductDetails = () => {

  const { cartItems, setCartItems, setTotalQuantities, setTotalPrice } = useCurrentCart()
  const { current, setCurrentUser } = useCurrentUser()
  const [sneakers, setSneakers] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState("")
  const [size, setSize] = useState("")
  const [condition, setCondition] = useState("")
  const [sale, setSale] = useState([])
  const [sellToggle, setSellToggle] = useState(false)



  let { id } = useParams()

  useEffect(() => {
    fetch(`/sneakers/${id}`)
      .then(r => r.json())
      .then(data => setSneakers(data)
      )
  }, []);

  const onAdd = () => {
    const checkProductInCart = cartItems.find((item) => item.id === id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + sneakers.estimatedMarketValue * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.quantity === id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      sneakers.quantity = quantity;

      setCartItems([...cartItems, { ...sneakers }]);
    }

    toast.success(`${sneakers.name} added to the cart.`);
  }



  const handlePostForSale = (e) => {
    e.preventDefault()

    const userSale = {
      sneaker_id: id,
      user_id: current.id,
      price: price,
      size: size,
      condition: condition
    }


    fetch(`/sales`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userSale)
    })
      .then(res => res.json())
      .then(data => setSale(
        [...sale, data]
      ))

    toast.success(`${sneakers.name} has been posted for sell.`)
  }













  return (

    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={sneakers.image} className="product-detail-image" />
        </div>
        <div className="small-images-container">
          {/* {image.map((item, i) => (
            <img
              key={i}
              src={item}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
            />
          ))} */}
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{sneakers.name}</h1>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            (20)
          </p>
        </div>
        <h4>Background: </h4>
        <p>{sneakers.story}</p>
        <p className="price">${sneakers.estimatedMarketValue}</p>
        <div className="quantity">

          <h3>Size:</h3>
          <select>
            <option>Select</option>
            <option>3.5</option>
            <option>4</option>
            <option>4.5</option>
            <option>5</option>
            <option>5.5</option>
            <option>6</option>
            <option>6.5</option>
            <option>7</option>
            <option>7.5</option>
            <option>8</option>
            <option>8.5</option>
            <option>9</option>
            <option>9.5</option>
            <option>10</option>
            <option>10.5</option>
            <option>11</option>
            <option>11.5</option>
            <option>12</option>
            <option>12.5</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
          </select>
          {/* <p className="quantity-desc">
            <span className="minus" onClick=""><AiOutlineMinus /></span>
            <span className="num"></span>
            <span className="plus" onClick=""><AiOutlinePlus /></span>
          </p> */}
        </div>
        <div className="buttons">

          <button onClick={() => onAdd()} type="button" className="add-to-cart" >Add to Cart</button>

          <button type="button" className="buy-now" onClick="">Buy Now</button>
          <button type="button" className="sell-now" onClick={() => setSellToggle(!sellToggle)}>Sell Now</button>
        </div>
        <div>
          {sellToggle ?
            <div className="product-detail-desc">
              <form onSubmit={handlePostForSale} class="form-style-7">
                <ul>
                  <li>
                    <label for="name">Price</label>
                    <input type="number" name="name" value={price} onChange={e => setPrice(e.target.value)} />
                    <span>prices will be reviewed</span>
                  </li>
                  <li>
                    <label for="email">Size</label>
                    <select value={size} onChange={e => setSize(e.target.value)}>
                      <option>Select Size</option>
                      <option>3.5</option>
                      <option>4</option>
                      <option>4.5</option>
                      <option>5</option>
                      <option>5.5</option>
                      <option>6</option>
                      <option>6.5</option>
                      <option>7</option>
                      <option>7.5</option>
                      <option>8</option>
                      <option>8.5</option>
                      <option>9</option>
                      <option>9.5</option>
                      <option>10</option>
                      <option>10.5</option>
                      <option>11</option>
                      <option>11.5</option>
                      <option>12</option>
                      <option>12.5</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                    </select>
                  </li>
                  <li>
                    <label for="url">Condition</label>
                    <select value={condition} onChange={e => setCondition(e.target.value)}>
                      <option>Select Condition</option>
                      <option>Dead Stock</option>
                      <option>Near Dead Stock</option>
                      <option>Worn</option>
                    </select>
                  </li>
                  <li>
                    <input type="submit" value="Post" onClick={handlePostForSale} />
                  </li>
                </ul>
              </form>

            </div>
            :
            null}
        </div>
      </div>
    </div>

  )
}

export default ProductDetails