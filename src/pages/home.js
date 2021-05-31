import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Events from "../components/Events"
import SEO from "../components/seo"
import Image from "gatsby-image"

const Board = ({
  data: {
    allStrapiEvents: { nodes: events },
  },
}) => {
  return (
    <Layout>
      <SEO title="Events" />
      <section className="blog-page">
        <Events events={events} title="Recent Update" />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiEvents(sort: {fields: created_at, order: DESC}, limit: 3) {
    nodes {
      title
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
