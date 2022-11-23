import React, { useState } from 'react'
import '../login.css'
import useCurrentUser from '../UserContext'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {



  const { setCurrentUser, current } = useCurrentUser()
  let navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [full_name, setFullname] = useState('')




  function handleSubmit(e) {
    e.preventDefault()

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, full_name }),
    })
      .then((r) => r.json())
      .then((newUser) => setCurrentUser(console.log("newUser", newUser)))
      .then(navigate("/", { state: { message: "Access Granted" } }))
  }





  return (
    <div class="login-box">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <input value={full_name} onChange={(e) => setFullname(e.target.value)} type="text" name="" required="" />
          <label>Full Name</label>
        </div>
        <div class="user-box">
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="" required="" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="" required="" />
          <label>Password</label>
        </div>
        <a href="#" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Create Account
        </a>

        <Link to="/">
          <p>Home Page</p>
        </Link>
      </form>
    </div >
  )
}

export default Signup