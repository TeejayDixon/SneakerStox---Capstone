import React, { useState } from 'react'
import '../login.css'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';

const Login = ({ current, setCurrentUser }) => {



  let navigate = useNavigate()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            onLogin(user)
            user ? navigate('/') : navigate('/signup')
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })

    function onLogin(user) {
      setCurrentUser(user);
    }

  }




  return (
    <div class="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="" required="" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a onClick={handleSubmit} href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit

        </a>
        <Link to="/signup">
          <p>Create Account</p>
        </Link>
        <Link to="/">
          <p>Home Page</p>
        </Link>
        {errors.map((error) => (
          <Alert severity="error">
            {error}
          </Alert>
        ))}
      </form>
    </div>
  )
}

export default Login