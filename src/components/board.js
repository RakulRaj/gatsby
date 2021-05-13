
import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
import { StaticQuery, graphql } from "gatsby"
const baseUrl="https://strapy-iowa.herokuapp.com"
export default class Board extends React.Component {

    render() {
      const MAX_LENGTH = 250;

        return (
          <StaticQuery
          query={graphql`
          {
            allStrapiBoardmembers {
              edges {
                node {
                  title
                  role
                  description
                  email
                  image {
                    id
                    url
                  }
                }
              }
            }
          }
        `}
          render={data=> <div className="box center">
          <h2 className="heading">Board Members</h2>
          <div className="container">
            <div className="row">
          {data.allStrapiBoardmembers.edges.map((document,index) => (
            <div className="col-md-4" key={index}>
            <div className="team-player">
              <img src={baseUrl+ `${document.node.image[0].url}`} alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
              <p className="category text-primary">{document.node.title}</p>
              <p>{document.node.role}</p>
              <p className="description half-size">{`${document.node.description.substring(0, MAX_LENGTH)}...`}
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
