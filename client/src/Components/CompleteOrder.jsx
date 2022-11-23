import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireworks } from '../utils'

const CompleteOrder = () => {


  useEffect(() => {
    runFireworks()
  }, [])


  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your purchase!</h2>
        <p className="email-msg">Check your email inbox for the receipt</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:orders@sneakerstox.com">orders@sneakerstox.com</a>
        </p>
        <p>
          <Link to="/">
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </Link>
        </p>
      </div>
    </div>

  )
}

export default CompleteOrder