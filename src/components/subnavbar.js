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
import './subnavbar.css'
import logo from '../images/Logo_Image.ico'
import { useStaticQuery, graphql } from 'gatsby'
const query = graphql`
  {
    allStrapiSubnavbars {
      nodes {
        font_color {
          color
          id
        }
        title
        bg_color {
          color
          id
        }
        name {
          font_stack
          id
        }
        bg_sub_menu {
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
        sub_menu_color {
          color
          id
        }
      }
    }
  }
`
const SubNavbar = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiSubnavbars: { nodes: subnavbar },
  } = data
  console.log(data)
  const {
    bg_color,
    font_color,
    font_family,
    sub_menu_color,
    bg_sub_menu,
    font_size,
    message,
    title,
    font_stack
  } = subnavbar[0]
  return (
    <header className="dark">
            <nav style={{
            backgroundColor: bg_color.color,
          }}  role="navigation">
              <a className="ic menu" tabIndex={1}>
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </a>
              <a className="ic close" />
              <ul className="main-nav">
                {subnavbar.map(
                  (document, index1) => (
                    <li className="top-level-link" key={index1}>
                      <a style={{
            color: font_color.color,
          }}>
                        <span>{document.title}</span>
                      </a>
                      <div className="sub-menu-block" style={{
            backgroundColor: bg_sub_menu.color,
          }}>
                        <div className="row">
                          <div className="col-md-4 col-lg-4 col-sm-4">
                            <h2 className="sub-menu-head"></h2>
                            <ul className="sub-menu-lists">
                              {document.name.map((menu, index) => (
                                <li key={index}>
                                  <a style={{
            color: sub_menu_color.color,
          }}>{menu.font_stack}</a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="col-md-4 col-lg-4 col-sm-4">
                            <div className="row banners-area">
                              <div className="col-md-12 col-lg-12 col-sm-12">
                                <img
                                  src="http://new.iowastaterid.org/images/2021_Q2_ISRID_Update_Preview.JPG"
                                  width="100%;"
                                  height="300px"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </header>
  )
}


export default SubNavbar
