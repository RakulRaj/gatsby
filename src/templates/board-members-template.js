import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const baseUrl="https://strapy-iowa.herokuapp.com"

const ComponentName = ({ data }) => {
  const { role, name,image,slug,email,description } = data.blog

  return (
    <Layout>
      <SEO title={name} description={role} />

          <div className="box center">
            <div className="container">
              <div className="row">

              <div className="col-md-12">
              <div className="team-player">
                <img src={baseUrl+ `${image[0].url}`} alt={image[0].url} className="img-fluid img-raised" />
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
      role
      name
      image {
        url
        id
      }
      slug
      email
      description
    }
  }
`

export default ComponentName
