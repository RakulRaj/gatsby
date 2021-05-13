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

class NavbarPage extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <nav className="navigation">
        <img
          src={logo}
          style={{ height: 77, listStyleType: 'none', float: 'left',marginTop: 10 }}
        />
        <ul className="menu" style={{ listStyleType: 'none', float: 'right',height: 80,paddingLeft: 40,fontWeight: 600 }}>
          <li className="menu__item">
            <a href="#" className="menu__link">
            Sign in
            </a>
          </li>
          </ul>
      </nav>

    )
  }
}

export default NavbarPage
