import React, { Component } from 'react'
import Layout from '../components/layout'
import Intro from '../components/mask'
import SEO from '../components/seo'
import Carousel from '../components/carousel'
import AboutSection from '../components/aboutSection'
import { MDBRow } from 'mdbreact'
import Board from "../components/board";
import Board1 from "../components/board1";
import Board2 from "../components/board2";
import HomePage from "../components/homecontent";
class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="ISRID"
            // keywords={[
            //   `ISRID`,
            // ]}
          />

          <link
            href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://www.bluleadz.com/hs-fs/hub/57042/hub_generated/module_assets/29497713864/1589986639805/module_29497713864_2020_-_Two_Col_Timeline.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://www.bluleadz.com/hs-fs/hub/57042/hub_generated/template_assets/29064077784/1598541453890/bz-bluleadz-2018/CSS/bz-2020-main.min.css"
          ></link>
          <main>
            <HomePage/>
            <AboutSection />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
