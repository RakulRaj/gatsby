import React, { Component } from 'react'
import Layout from '../components/layout'
import Intro from '../components/mask'
import SEO from '../components/seo'
import Carousel from '../components/carousel'
import AboutSection from '../components/aboutSection'
import { MDBRow } from 'mdbreact'
import Boards from "../components/Boards";
import Board1 from "../components/board1";
import Board2 from "../components/board2";
import HomePage from "../components/homecontent";
import Events from "../components/Events"
import { graphql } from "gatsby"


export default ({ data }) => {
  debugger
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

            <Events events={events} title="Recent Update" showLink/>
          </main>
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
  allStrapiEvents(sort: {fields: created_at, order: DESC}, limit: 3) {
    nodes {
      title
      id
      content_align
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
