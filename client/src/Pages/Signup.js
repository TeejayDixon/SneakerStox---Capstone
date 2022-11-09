
import React, { useState, useEffect, useContext } from 'react';
import {CartContext} from "../CartContext"

function Signup() {

    const {setCurrentUser} = useContext(CartContext);


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, fullname }),
    })
      .then((r) => r.json())
      .then((newUser) => setCurrentUser(console.log("newUser", newUser)))
      
  }
     
  return (

    <>
      <form onSubmit={handleSubmit}>
        <label>Full name</label>
        <input value={fullname} onChange={(e) => setFullName(e.target.value)} />
        <label>email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}


export default Signup