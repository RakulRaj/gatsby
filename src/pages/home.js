import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Boards from "../components/Boards"
import SEO from "../components/seo"

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
  allStrapiMembers {
    nodes {
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
}
`
export default Board
