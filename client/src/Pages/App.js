import React, { useState } from 'react';
import '../App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Product} from '../Components'
import { Routes, Route } from "react-router-dom"
import Layout from '../Components/Layout'
import ProductDetails from '../Pages/Product/ProductDetails'
import Home from '../Components/Home'
import Login from './Login'
import Signup from './Signup'
import WishList from '../Components/WishList'
import UserProfile from '../Components/UserProfile'
import CompleteOrder from '../Components/CompleteOrder'
import Stripe from '../Components/Stripe'




  

function App({ children }) {

  
    const [current, setCurrentUser] = useState(null)
    


    



    
    
    

    

 
  return (
    
  <>
   
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="products" element={<Product />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="ordercomplete" element={<CompleteOrder />}/>       
     </Route>
    <Route path="/login" element={<Login current={current} setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/products' element={<Product />} />
        <Route path="/cart" element={<Stripe/>}/>
    </Routes>
   
    </>
  )
}

export default App;
