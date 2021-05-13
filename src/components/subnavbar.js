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
import { StaticQuery, graphql } from "gatsby"

class SubNavbar extends Component {
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
        allStrapiSubmenus {
          edges {
            node {
              menulist {
                menuName
                id
                subMenu
              }
            }
          }
        }
      }
    `}
      render={data=>
        <header className="dark">
        <nav role="navigation">
          <a className="ic menu" tabIndex={1}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </a>
          <a  className="ic close" />
          <ul className="main-nav">
          {data.allStrapiSubmenus.edges[0].node.menulist.map((document,index1) => (
  <li className="top-level-link" key={index1}>
  <a><span>{document.menuName}</span></a>
  <div className="sub-menu-block">
                    <div className="row">
                      <div className="col-md-4 col-lg-4 col-sm-4">
                        <h2 className="sub-menu-head"></h2>
                        <ul className="sub-menu-lists">
                        {document.subMenu.map((menu,index)=>(
                          <li key={index}><a>{menu}</a></li>
                        ))}

                        </ul>
                      </div>

                      <div className="col-md-4 col-lg-4 col-sm-4">
                      <div className="row banners-area">
                      <div className="col-md-12 col-lg-12 col-sm-12">
                        <img src="http://new.iowastaterid.org/images/2021_Q2_ISRID_Update_Preview.JPG" width="100%;"height="300px" />
                      </div>
                      </div>
                      </div>
                    </div>

                  </div>
</li>

))}

          </ul>
        </nav>
      </header>
    }
    ></StaticQuery>

)
  }
}

export default SubNavbar
