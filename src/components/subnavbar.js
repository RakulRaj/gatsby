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

class SubNavbar extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (

      <header className="dark">
        <nav role="navigation">
          <a href="javascript:void(0);" className="ic menu" tabIndex={1}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </a>
          <a href="javascript:void(0);" className="ic close" />
          <ul className="main-nav">
            <li className="top-level-link">
              <a><span>Home</span></a>
            </li>
            <li className="top-level-link">
              <a className="mega-menu"><span>Community</span></a>
              <div className="sub-menu-block">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-6">
                  <h2 className="sub-menu-head"></h2>
                    <ul className="sub-menu-lists">
                      <li><a>Bulletin Archive</a></li>
                      <li><a>Credentials</a></li>
                      <li><a>Education</a></li>
                      <li><a>Facebook</a></li>
                      <li><a>Post a Job</a></li>
                      <li><a>Resources</a></li>
                    </ul>
                  </div>

                  <div className="col-md-6 col-lg-6 col-sm-6">
                  <div className="row banners-area">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                    <img src="http://new.iowastaterid.org/images/2021_Q2_ISRID_Update_Preview.JPG" width="100%;" height="300px" />
                  </div>

                </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="top-level-link">
              <a className="mega-menu"><span>Interpreters</span></a>
              <div className="sub-menu-block">
                <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <h2 className="sub-menu-head"></h2>
                    <ul className="sub-menu-lists">
                      <li><a>Fall Conference</a></li>
                      <li><a>CEU events</a></li>
                      <li><a>Book CLub</a></li>
                      <li><a>CMP Sponcers</a></li>
                      <li><a>Lowa License</a></li>
                      <li><a>Join and Renew</a></li>
                      <li><a>Legal Resources</a></li>
                      <li><a>Merchandise</a></li>
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
            <li className="top-level-link">
              <a className="mega-menu"><span>Members</span></a>
              <div className="sub-menu-block">
              <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-4">
                    <h2 className="sub-menu-head"></h2>
                    <ul className="sub-menu-lists">
                      <li><a>Employement</a></li>
                      <li><a>InMomerium</a></li>
                      <li><a>Manage Account</a></li>
                    </ul>
                  </div>

                  <div className="col-md-4 col-lg-4 col-sm-4">
                  <div className="row banners-area">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                    <img src="http://new.iowastaterid.org/images/2021_Q2_ISRID_Update_Preview.JPG" width="100%;" height="300px"/>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="top-level-link">
              <a><span>Calender</span></a>
            </li>
          </ul>
        </nav>
      </header>


)
  }
}

export default SubNavbar
