import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/Events'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const {
    allStrapiMembers: { nodes: members },
  } = data
  const {
    allStrapiEvents: { nodes: events },
  } = data

  return (
    <Layout>
      <SEO
        title="ISRID"
        // keywords={[
        //   `ISRID`,
        // ]}
      />
      <main>
        <Events events={events} title="Recent Update" showLink />
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiMembers(sort: { fields: order, order: ASC }) {
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
    allStrapiEvents(sort: { order: ASC, fields: order }, limit: 3) {
      nodes {
        title
        id
        content_align
        order
        description {
          description
          id
        }
        font_family {
          id
          family
        }
        font_color {
          color
          id
        }
        slug
        updated_at
        title_align
        created_at(formatString: "MM Do, YYYY")
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
