import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
const baseUrl="https://strapy-iowa.herokuapp.com"

const ComponentName = ({ data }) => {
  debugger;
  const { role, name,image,slug,email,description } = data.blog.board_member[0];


  return (
    <Layout>
      <SEO title={name} description={role} />

          <div className="box center">
            <div className="container">
              <div className="row">

              <div className="col-md-12">
              <div className="team-player">
              <Image fluid={image.childImageSharp.fluid} className="img-fluid img-raised" style={{ width: "50%",height:"50%", marginLeft: 275}}/>
                <p className="category text-primary">{name}</p>
                <p>{role}</p>
                <p>{email}</p>
                <p className="description half-size">{description}
                </p></div>
                </div>
            </div>
            </div>
            </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($name: String) {
    blog: strapiMembers(board_member: {elemMatch: {name: {eq: $name}}}) {
      board_member {
        name
        description
        id
        email
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ComponentName
