import React, { useState, useEffect } from 'react';
import '../App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CartContext } from "../CartContext"
import { Product, FooterBanner, HeroBanner } from '../Components'
import { Link, Routes, Route } from "react-router-dom"
import Layout from '../Components/Layout'
import ProductDetails from '../Pages/Product/ProductDetails'
import Home from './Home'




function App({children}) {
const [sneakers, setSneakers] = useState([])
const [current, setCurrentUser] = useState(null)
const [currentSneaker, setCurrentSneaker] = useState()

  useEffect(() => {
    fetch(`/sneakers`)
      .then(response => response.json())
      .then(data => setSneakers(data))
  }, []);


 useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user))
      }
    });
 }, []);
  
  const handleSneaker = (item) => setCurrentSneaker({...sneakers, item})
  

 
    
console.log(sneakers)

  return (
    
   
    <div>
      <CartContext.Provider value={{ sneakers, setSneakers, current, setCurrentUser }} >
  
    <Layout>
      
      <HeroBanner />
      
      {/* <div className="products-heading">
          <h2>Trending</h2>
          <p>Build your sneaker collection</p>
        </div> */}
        
        
          <Product />
        
      
      
        <FooterBanner />

      
    </Layout>
  
      </CartContext.Provider>
  
    
    
     
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product  />} />
        <Route path="/products/:id" element={<ProductDetails />} />
     </Routes>
   </div>
  
    
  )
}

export default App;
