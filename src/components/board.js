
import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
import { useStaticQuery, graphql } from "gatsby"
const baseUrl="https://strapy-iowa.herokuapp.com"
const query = graphql`
  {
    allStrapiMembers {
      nodes {
        role
        name
        image {
          url
          id
        }
        email
        description
      }
    }
  }
`


const Board = () => {
  const data = useStaticQuery(query);
  const {allStrapiMembers:{nodes:members},}=data;
  const {role,name}=members[0];
  const MAX_LENGTH = 250;

        return (
          <div className="box center">
            <h2 className="heading">Board Members</h2>
            <div className="container">
              <div className="row">
            {members.map((document,index) => (
              <div className="col-md-4" key={index}>
              <div className="team-player">
                <img src={baseUrl+ `${document.image[0].url}`} alt={document.image[0].url} className="rounded-circle img-fluid img-raised" />
                <p className="category text-primary">{document.name}</p>
                <p>{document.role}</p>
                <p className="description half-size">{`${document.description.substring(0, MAX_LENGTH)}...`}
                </p></div>
                </div>
            ))}
            </div>
            </div>
            </div>
       )

    }

export default Board
