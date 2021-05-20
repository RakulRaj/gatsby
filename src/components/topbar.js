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
import { graphql, useStaticQuery } from 'gatsby'
const query = graphql`
  {
    allStrapiLogins(sort: { order: DESC, fields: id }) {
      nodes {
        message
        title
        font_color {
          color
          id
        }
        font_family {
          family
          id
        }
        font_size {
          size
          id
        }
        bg_color {
          id
          color
        }
      }
    }
  }
`

  const TopNavbarPage = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiLogins: { nodes: login },
  } = data
  console.log(data)
  const {
    bg_color,
    font_color,
    font_family,
    font_size,
    message,
    title,
  } = login[0]
  return (
      <nav
        className="navigation"
        style={{
          backgroundColor: bg_color.color, height:40,
        }}
      >
        <div className="row">
          <div className="col-md-9">
            <a
              style={{
                color: font_color.color,
                fontFamily: font_family.family,
                fontSize: font_size.size,
              }}
            >
              {message}
            </a>
          </div>
          <div className="col-md-3">
            <a
              style={{
                color: font_color.color,
                fontFamily: font_family.family,
                fontSize: font_size.size,

              }}
            >
              {title}
            </a>
          </div>
        </div>
       </nav>
  )
}

export default TopNavbarPage
