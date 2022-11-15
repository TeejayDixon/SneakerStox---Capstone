import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShopping } from 'react-icons/ai'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import useCurrentUser from '../UserContext'

const NavBar = () => {

  const { current, setCurrentUser, onLogout } = useCurrentUser()

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE",
    }).then((user) => onLogout(user))
  }


  return (
    <div className="navbar-container">
      <p>
        <Link to="/">SneakerStox</Link>
      </p>

      {
        current ?

          (<Grid container justifyContent="flex-end">
            <Stack gap={2} direction="row">
              <Link to="/login" >
                <Button onClick={handleLogout} color="success" display="flex" size="medium" variant="contained">Logout</Button>
              </Link>
              <Button color="secondary" size="medium" variant="contained">WishList</Button>
            </Stack>

            <button type="button"
              className="cart-icon" onClick="">
              <AiOutlineShopping />
              <span className="cart-item-qty">1</span>
            </button>
          </Grid>)

          :

          (<Grid container justifyContent="flex-end">
            <Stack gap={2} direction="row">
              <Link to="/login" >
                <Button color="success" display="flex" size="medium" variant="contained">Login</Button>
              </Link>
            </Stack>
          </Grid>)
      }


    </div>
  )
}

export default NavBar