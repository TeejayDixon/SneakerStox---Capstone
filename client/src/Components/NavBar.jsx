import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShopping } from 'react-icons/ai'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { CheckoutForm } from './'
import useCurrentCart from '../CartContext'
import Avatar from '@mui/material/Avatar';



const NavBar = ({ onLogout }) => {

  const [current, setCurrentUser] = useState(null)

  const { totalQuantities, setShowCart, showCart } = useCurrentCart()

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE",
    }).then((user) => onLogout(user))
  }


  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user))
      }
    });
  }, []);



  return (
    <div className="navbar-container">
      <p>
        <Link className="title-name" to="/">SneakerStox</Link>
      </p>

      {
        current ?

          (<Grid container justifyContent="flex-end">
            <Stack gap={2} direction="row">
              <Link to="/login" >
                <Button onClick={handleLogout} color="success" display="flex" size="medium" variant="contained">Logout</Button>
              </Link>
              <Link to='wishlist'>
                <Button color="secondary" size="medium" variant="contained">WishList</Button>
              </Link>
              <Link to="/userprofile">
                <Avatar src="/broken-image.jpg" />
              </Link>
            </Stack>

            <button type="button"
              className="cart-icon" onClick={() => setShowCart(true)}>
              <AiOutlineShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
            {showCart && <CheckoutForm showCart={showCart} setShowCart={setShowCart} />}
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