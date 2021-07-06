import React, { Component } from 'react'

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
          url
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
          font_weight {
            weight
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
  console.log('loginDaa', data)
  const loginData = login[0].login_content
  const LoginDatas = lodash.orderBy(loginData, ['order'], ['asc'])

  const { height } = login[0]
  return (
    <nav>
      <ul className="top-nav">
        {LoginDatas.map((item, index1) => (
          <li
            className="top-level-link"
            key={index1}
            style={{
              width: item.width,
              backgroundColor: item.bg_color.color,
              textAlign: item.float,
              height: height || '30px',
            }}
          >
            <Link to={`/${item.url}`}>
              <span
                style={{
                  color: item.font_color.color,
                  fontSize: item.font_size.size,
                  fontFamily: item.font_family.family,
                  fontWeight: item.font_weight.weight,
                  height:'20px',
                }}
              >
                {item.login_content}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TopNavbarPage
