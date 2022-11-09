import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CartContext } from "./CartContext"


function App() {
const [sneakers, setSneakers] = useState([])
const [current, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch(`/sneakers`)
      .then(response => response.json())
      .then(data => setSneakers(console.log(data)))
  }, []);


 useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user))
      }
    });
 }, []);
  

  


  return (
    
   
    <CartContext.Provider value={{ sneakers, setSneakers, current, setCurrentUser}} >
       <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
      </Routes> */}
        
    </CartContext.Provider>
    
  )
}

export default App;
