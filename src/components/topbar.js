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
import * as lodash from 'lodash'

const query = graphql`
{
  allStrapiLogins {
    nodes {
      id
      height
      login_content {
        width
        login_content
        order
        bg_color {
          color
          id
        }
        float
        font_family {
          family
          id
        }
        font_color {
          color
          id
        }
        font_size {
          size
          id
        }
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
  console.log("loginDaa",data)
  const loginData=login[0].login_content
  const LoginDatas=lodash.orderBy(loginData, ['order'],['asc'])

  const {
    height
  } = login[0]
  return (
            <nav >
              <ul className="top-nav">
                {LoginDatas.map(
                  (item, index1) => (
                    <li className="top-level-link" key={index1} style={{width:item.width,backgroundColor:item.bg_color.color,textAlign:item.float,height: height || "30px"}}>
                      <span style={{color:item.font_color.color,fontSize:item.font_size.size,fontFamily:item.font_family.family
          }}>
                 {item.login_content}</span>

                    </li>
                  )
                )}
              </ul>
            </nav>

  )
}


export default TopNavbarPage
