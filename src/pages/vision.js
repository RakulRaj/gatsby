import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Vision from "../components/aboutSection"
import SEO from "../components/seo"

const Board = ({
  data: {
    allStrapiVisions: { nodes: visions },
  },
}) => {
  return (
    <Layout>
      <SEO title="Board Member" />
      <section className="blog-page">
        <Vision visions={visions} title="" />
      </section>
    </Layout>
  )
}

export const query = graphql`
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
export default Board
