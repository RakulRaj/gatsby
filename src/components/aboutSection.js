import React from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact'
import mission from '../images/mission.jpg'
import vision1 from '../images/vision1.jpg'
import vision2 from '../images/vision2.jpg'
import vision3 from '../images/vision3.jpg'
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  allStrapiVisions {
    nodes {
      title
      vision {
        description
        id
      }
    }
  }
}
  `
  const FeaturesPage = () => {
    const data = useStaticQuery(query);
    const {allStrapiVisions:{nodes:visions},}=data;
    const {title,vision}=visions[0];
  return (
    <div className="box center">

    <h2 className="heading">{title || "Our Visions"}</h2>
  {vision.map((item,index) => (

    <p className="description half-size" key={item.id}>{item.description}
     </p>

  ))}   </div>
  )
}

export default FeaturesPage
