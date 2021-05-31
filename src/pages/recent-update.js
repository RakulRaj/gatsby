import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Events from "../components/Events"
import SEO from "../components/seo"

const Board = ({
  data: {
    allStrapiEvents: { nodes: events },
  },
}) => {
  return (
    <Layout>
      <SEO title="Board Member" />
      <section className="blog-page">
        <Events events={events} title="Recent Update" />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiEvents {
    nodes {
      title
      title_align
      id
      description {
        description
        id
      }
      slug
      updated_at
      created_at(formatString: "MM Do, YYYY")
      image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
}
`
export default Board
