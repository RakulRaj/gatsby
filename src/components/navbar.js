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
import { StaticQuery, graphql } from "gatsby"

class NavbarPage extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (

      <StaticQuery
      query={graphql`
        {
          allStrapiHeaders {
            edges {
              node {
                bgcolor2
                bgcolor1
                color
              }
            }
          }
        }
      `}
      render={data => (
        <nav className="navigation" style={{
          backgroundColor: data.allStrapiHeaders.edges[0].node.bgcolor1}}>
        <img
          src={logo}
          style={{ height: 77, listStyleType: 'none', float: 'left',marginTop: 10 }}
        />
        <ul className="menu" style={{ listStyleType: 'none', float: 'right',height: 80,paddingLeft: 40,fontWeight: 600 }}>
          <li className="menu__item">
            <a href="#" style={{
          color: data.allStrapiHeaders.edges[0].node.color}} className="menu__link">
            Sign in
            </a>
          </li>
          </ul>
      </nav>
      )}
    ></StaticQuery>
    )
  }
}

export default NavbarPage
