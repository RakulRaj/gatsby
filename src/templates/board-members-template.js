import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
const baseUrl="https://strapy-iowa.herokuapp.com"

const ComponentName = ({ data }) => {
  debugger;
  console.log("boardData",data)
  const { role, name,image,slug,email,description } = data.blog;


  return (
    <Layout>
      <SEO title={slug} description={role} />

          <div className="box center">
            <div className="container">
              <div className="row">

              <div className="col-md-12">
              <div className="team-player">
              <Image fluid={image.childImageSharp.fluid} className="img-fluid img-raised" style={{ width: "50%",height:"50%"}}/>
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

  query GetSingleBlog($slug: String) {
    blog: strapiMembers(slug: { eq: $slug }) {
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
      email
      id
      role
      slug
      name
    }
  }
`

export default ComponentName
