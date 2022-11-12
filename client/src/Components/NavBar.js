import React, {useContext} from 'react';
import { MDBIcon, MDBBadge } from 'mdb-react-ui-kit'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sell from '../Pages/Sell'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import { CartContext } from '../CartContext'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function NavBar() {

const {current, setCurrentUser, onLogout} = useContext(CartContext);

  function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then((user) => onLogout(user))
    }


  return (

    
    <BrowserRouter>
      <div>
      <Navbar>
      <Container>
        <Navbar.Brand href="/">SneakerStox</Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='me-1' variant='success'>Search</Button>
          </Form>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/sell">Sell</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>

            {current ? (
              
                <Navbar.Text>
                  <a href="/user">Welcome!</a>
                <Button variant="success" href="/" onClick={handleLogout}>Logout</Button>{' '}
                <MDBBadge pill color='danger'>!</MDBBadge>
                <span>
                  <MDBIcon fas icon='shopping-cart'></MDBIcon>
                </span>
                </Navbar.Text>
              
            )
              :
              (<Navbar.Text>
                <Button variant="secondary" href="/login">Login</Button>{' '}
                <Button variant="success" href="/signup">Signup</Button>{' '}
              </Navbar.Text>)}
            
        </Navbar.Collapse>
      </Container>
        </Navbar> 
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sell" element={<Sell />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default NavBar;