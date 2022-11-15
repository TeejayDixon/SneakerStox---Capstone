import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Select from "react-select";




const ProductDetails = () => {

  const [sneakers, setSneakers] = useState([])
  const [index, setIndex] = useState(0);


  let { id } = useParams()

  useEffect(() => {
    fetch(`/sneakers/${id}`)
      .then(r => r.json())
      .then(data => setSneakers(data)
      )
  }, []);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#E7E7E7",

      borderColor: "black",

      "&:hover": {

        borderColor: "black"
      }
    })
  };

  const options = [
    {
      label: 7,
      value: 1
    },
    {
      label: 7.5,
      value: 2
    },
    {
      label: 8,
      value: 3
    },
    {
      label: 8.5,
      value: 4
    },
    {
      label: 9,
      value: 5
    },
    {
      label: 9.5,
      value: 6
    },
    {
      label: 10,
      value: 7
    },
    {
      label: 10.5,
      value: 8
    },
    {
      label: 11,
      value: 9
    },
    {
      label: 11.5,
      value: 10
    },
    {
      label: 12,
      value: 11
    },
    {
      label: 13,
      value: 12
    },
    {
      label: 14,
      value: 13
    },
    {
      label: 15,
      value: 14
    }
  ];





  return (

    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={sneakers.image} className="product-detail-image" />
        </div>
        <div className="small-images-container">
          {/* {image?.map((item, i) => (
            <img
              key={i}
              src={sneakers.image(item)}
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
          <h3>Select Size</h3>
          <p className="quantity-desc">
            {/* <span className="minus" onClick=""><AiOutlineMinus /></span>
            <span className="num"></span>
            <span className="plus" onClick=""><AiOutlinePlus /></span> */}
            <Select styles={customStyles} options={options} />
          </p>
        </div>
        <div className="buttons">
          <Link to="/cart" >
            <button type="button" className="add-to-cart" onClick="">Add to Cart</button>
          </Link>
          <button type="button" className="buy-now" onClick="">Buy Now</button>
        </div>
      </div>
    </div>

  )
}

export default ProductDetails