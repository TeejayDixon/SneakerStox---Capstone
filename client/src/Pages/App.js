import React, { useState, useEffect } from 'react';
import '../App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Product, FooterBanner, HeroBanner, CheckoutForm } from '../Components'
import { Routes, Route } from "react-router-dom"
import Layout from '../Components/Layout'
import ProductDetails from '../Pages/Product/ProductDetails'
import Home from '../Components/Home'
import useSneaker from '../SneakerContext'
import Login from './Login'
import Signup from './Signup'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



// const stripePromise = loadStripe("pk_test_51M0WIqLjIBu8f788IuSO5ibcCLKjWxhraU7ucwhakp8xEAYbJNkeEo8vONejfYGoNjJt4tonY1FOmtsphEL66HeE00aPRpE7xz");
  

function App({ children }) {

  
  const [current, setCurrentUser] = useState(null)
  // const [clientSecret, setClientSecret] = useState("");


  
 
  return (
    
  <>
   
  
    
     
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products" element={<Product />} />
      </Route>
        <Route path="/login" element={<Login current={current} setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CheckoutForm />}/>
        <Route path='/products' element={<Product />} />
     </Routes>
   
  
    </>
  )
}

export default App;
