import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const UserProfile = () => {

  const navigate = useNavigate()
  const [current, setCurrentUser] = useState([])
  const [errors, setErrors] = useState([])
  const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let id = useParams()

  useEffect(() => {
    fetch(`/users/${id}`)
      .then(response => response.json())
      .then(data => setCurrentUser(data))
  }, []);



  function handleSubmit(e) {
    e.preventDefault()

    const userUpdate = {
      full_name,
      email,
      password
    }
    const id = setCurrentUser.id
    fetch(`/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userUpdate)
    })
      .then(res => {
        if (res.ok) {
          console.log("ok")
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  function handleDelete() {
    const id = current.id
    fetch(`/users/${id}`, {
      method: 'DELETE'
    })
      .then(setCurrentUser(null))
      .then(navigate("/signup", { state: { message: "Account Deleted" } }))
  }




  return (
    <div className="user-profile">
      <form onSubmit={handleSubmit}>
        <Stack
          component="form"
          sx={{
            width: '25ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <h2>{current.full_name}'s User Profile</h2>
          <h5>Update Account Details</h5>
          <TextField
            hiddenLabel

            placeholder="Full Name"
            variant="filled"
            size="small"
            value={full_name}
            onChange={e => setFullName(e.target.value)}
          />
          <TextField
            hiddenLabel

            placeholder="email"
            variant="filled"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            hiddenLabel

            placeholder="Password"
            variant="filled"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {errors ? <div>{errors}</div> : null}
          <Button onClick={handleSubmit} variant="contained" color="success">
            Save
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete Account
          </Button>
        </Stack>
      </form>
    </div>


  )
}

export default UserProfile