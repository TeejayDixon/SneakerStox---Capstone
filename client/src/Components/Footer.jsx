import React from 'react'
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 SneakerStox All rights reserved</p>
      <p className="icons">
        <AiOutlineTwitter />
        <AiFillGithub />
        <AiFillLinkedin />
      </p>
    </div>
  )
}

export default Footer