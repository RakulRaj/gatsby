import React from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact'
import mission from '../images/mission.jpg'
import vision1 from '../images/vision1.jpg'
import vision2 from '../images/vision2.jpg'
import vision3 from '../images/vision3.jpg'
import { StaticQuery, graphql } from "gatsby"

const FeaturesPage = () => {

  return (
    <StaticQuery
    query={graphql`
    {
      allStrapiVisions {
        edges {
          node {
            description
          }
        }
      }
    }
  `}
    render={data=>
<div>
      <div className="box center">
      <h2 className="heading">Our Vision</h2>
    {data.allStrapiVisions.edges.map((document,index) => (

      <p className="description half-size">{document.node.description}
       </p>

    ))}   </div>
    </div>}
  ></StaticQuery>

  )
}

export default FeaturesPage
