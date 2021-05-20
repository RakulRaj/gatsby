import React, { Component } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdbreact'
import { Link } from 'gatsby'
import CustomNavLink from './customLink'
import './navbar.css'
import logo from '../images/Logo_Image.ico'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allStrapiNavbars {
      nodes {
        bg_color {
          id
          color
        }
        title
      }
    }
  }
`
const NavbarPage = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiNavbars: { nodes: navabar },
  } = data
  console.log(data)
  const {
    bg_color,
    title,
  } = navabar[0]
  return (
      <nav
        className="navigation"
        style={{
          backgroundColor: bg_color.color, marginTop:40,
        }}
      >
    <img
          src={logo}
          style={{ height: 143, listStyleType: 'none', float: 'left',marginTop: 10 }}
        />
       </nav>
  )
}


export default NavbarPage
