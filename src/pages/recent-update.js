import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import HomeContent from "../components/homecontent"
import SEO from "../components/seo"

const Board = ({
  data: {
    allStrapiHomes: { nodes: homes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Board Member" />
      <section className="blog-page">
        <HomeContent homes={homes} title="" />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiHomes {
    nodes {
      font_family {
        family
        id
      }
      description {
        description
        id
      }
      border_color {
        color
        id
      }
      font_size {
        size
        id
      }
      id
      title
      font_color {
        color
        id
      }
      isEnabled
    }
  }
}
`
export default Board
