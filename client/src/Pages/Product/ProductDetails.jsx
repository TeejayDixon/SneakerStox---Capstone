
import { useParams } from "react-router-dom"



const ProductDetails = () => {


  let { id } = useParams()







  return (
    <div>
      <div
        className="product-detail-container">
        <div>
          <div className="image-container">
            <img src="" />
            <h1>hey</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails