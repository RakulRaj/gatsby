import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Boards from "../components/Boards"
import SEO from "../components/seo"
import Image from "gatsby-image"

const Board = ({
  data: {
    allStrapiMembers: { nodes: members },
  },
}) => {
  return (
    <Layout>
      <SEO title="Board Member" />
      <section className="blog-page">
        <Boards members={members} title="" />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiMembers(sort: {fields: order, order: ASC}) {
    nodes {
      name
      order
      role
      slug
      email
      description
      id
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
export default Board
