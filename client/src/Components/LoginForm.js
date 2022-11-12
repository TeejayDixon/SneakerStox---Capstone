import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext'
import { Alert } from 'react-bootstrap'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';


function LoginForm() {

  const { current, setCurrentUser} = useContext(CartContext);
  let navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
  }


 function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then((user) => onLogout(user))
 }
  
  
    function onLogin(user) {
    setCurrentUser(user);
  }

  function onLogout() {
    setCurrentUser(null);
  }




  return (

    <div>
    <form onSubmit={handleSubmit}>

    

<MDBContainer fluid className='p-4 loginform'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best marketplace <br />
            <span className="text-primary">for any sneaker enthusiast</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

                <MDBInput onChange={(e) => setEmail(e.target.value)} value={email} wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                <MDBInput onChange={(e) => setPassword(e.target.value)} value={password} wrapperClass='mb-4' label='Password' id='form1' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              </div>

                <MDBBtn className='w-100 mb-4' size='md'>login</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                  </MDBBtn>
                  
                  {errors.map((error) => (
              <Alert variant="primary" key={error}>
               {error}
              </Alert>
            ))}

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>
        

      </MDBContainer>
      </form>
    </div>
  )
}


export default LoginForm