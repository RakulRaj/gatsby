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

export default ({ data }) => {
  const {
    allStrapiMembers: { nodes: members },
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
            <Boards members={members} titile="Board Members" showLink/>
          </main>
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
