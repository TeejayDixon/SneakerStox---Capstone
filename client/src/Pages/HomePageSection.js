import { CartContext } from "../CartContext"
import React, { useContext} from 'react'


function HomePageSection() {

  const {sneakers} = useContext(CartContext);



   return  (


      <div>
       {sneakers.map((sneakers) => 
         <img src={sneakers.image} />
            
            )}
        </div>
    
   )
}

export default HomePageSection 