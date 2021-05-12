import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
import { StaticQuery, graphql } from "gatsby"
const baseUrl="https://strapy-iowa.herokuapp.com"
export default class Board extends React.Component {

    render() {

        return (
          <StaticQuery
          query={graphql`
          {
            allStrapiNewboardmembers {
              edges {
                node {
                  Description
                  Name
                  Role
                  Image {
                    id
                    url
                  }
                }
              }
            }
          }
        `}
          render={data=> <div className="box center">
          <h2 className="heading">Here is our team</h2>
          <div className="container">
            <div className="row">
          {data.allStrapiNewboardmembers.edges.map((document,index) => (
            <div className="col-md-4">
            <div className="team-player">
              <img src={baseUrl+ `${document.node.Image[0].url}`} alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
              <p className="category text-primary">{document.node.Name}</p>
              <p>{document.node.Role}</p>
              <p className="description half-size">{document.node.Description}
              </p></div>
              </div>
          ))}
          </div>
          </div>
          </div>}
        ></StaticQuery>
       )
    }
}

import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
import { StaticQuery, graphql } from "gatsby"
const baseUrl="https://strapy-iowa.herokuapp.com"
export default class Board extends React.Component {

    render() {

        return (
          <StaticQuery
          query={graphql`
          {
            allStrapiNewboardmembers {
              edges {
                node {
                  Description
                  Name
                  Role
                  Image {
                    id
                    url
                  }
                }
              }
            }
          }
        `}
          render={data=> <div className="box center">
          <h2 className="heading">Here is our team</h2>
          <div className="container">
            <div className="row">
          {data.allStrapiNewboardmembers.edges.map((document,index) => (
            <div className="col-md-4">
            <div className="team-player">
              <img src={baseUrl+ `${document.node.Image[0].url}`} alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
              <p className="category text-primary">{document.node.Name}</p>
              <p>{document.node.Role}</p>
              <p className="description half-size">{document.node.Description}
              </p></div>
              </div>
          ))}
          </div>
          </div>
          </div>}
        ></StaticQuery>
       )
    }
}

