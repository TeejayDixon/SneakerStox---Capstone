import React from 'react'
import { Helmet } from "react-helmet";
import NavBar from './NavBar'
import Footer from './Footer'


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
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout