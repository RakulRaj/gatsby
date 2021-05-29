
import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
const baseUrl="https://strapy-iowa.herokuapp.com"

const BoardMember = ({ id, role, name, image, description, slug, email }) => {
  debugger
  const MAX_LENGTH = 250;
        return (

              <div className="col-md-4">
                 <Link  to={`/board/${slug}`} key={id}>
              <div className="team-player">
                <Image fluid={image.childImageSharp.fluid} className="img-fluid img-raised" />
                <p className="category text-primary">{name}</p>
                <p>{role}</p>
                <p className="description half-size">{`${description.substring(0, MAX_LENGTH)}...`}
                </p></div>
                </Link>
                </div>


       )

    }

export default BoardMember
