import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import Footer from './footer'
import "./layout.css"
import SubNavbar from './subnavbar'
import Board from './board'
import TopNavbar from './topbar'

const Layout = ({ children }) => (
     <>
     <TopNavbar/>
        <Navbar />
        <SubNavbar/>
          {children}
          <Board/>
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
