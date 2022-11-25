import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 SneakerStox All rights reserved</p>
      <p className="icons">
        <a href="https://twitter.com/TahjgD">
          <AiOutlineTwitter />
        </a>
        <a href="https://github.com/TeejayDixon">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/tahjgdixon/">
          <AiFillLinkedin />
        </a>
      </p>
    </div>
  )
}

export default Footer