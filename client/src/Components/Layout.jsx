import React from 'react'
import { Helmet } from "react-helmet";
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Helmet>
        <title>SneakerStox</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout