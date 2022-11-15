import React, { useState, useEffect } from 'react';
import '../App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Product, FooterBanner, HeroBanner, Cart } from '../Components'
import { Routes, Route } from "react-router-dom"
import Layout from '../Components/Layout'
import ProductDetails from '../Pages/Product/ProductDetails'
import Home from '../Components/Home'
import useSneaker from '../SneakerContext'
import Login from './Login'
import Signup from './Signup'





function App({ children }) {
  
const [current, setCurrentUser] = useState(null)
const [currentSneaker, setCurrentSneaker] = useState()
const { sneakers, setSneakers } = useSneaker()
  
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
    
  <>
   
  
    
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
     </Routes>
   
  
    </>
  )
}

export default App;
