
import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
import {
  MDBIcon,
} from 'mdbreact'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allStrapiHomes(filter: {isEnabled: {eq: true}}) {
      nodes {
        font_family {
          family
          id
        }
        description {
          description
          id
        }
        border_color {
          color
          id
        }
        font_size {
          size
          id
        }
        id
        title
        font_color {
          color
          id
        }
        isEnabled
      }
    }
  }
`


const HomeContent = () => {
  const data = useStaticQuery(query);
  const {allStrapiHomes:{nodes:homes},}=data;
        return (

          <div className="box center">
            <div className="container">
              <div className="row ">
              {homes.map((item,index) => (
                <div className="col-md-6" key={item.id}>
                <div className="homeContent">
                <h4  style={{
          color: item.font_color.color
        }}>{item.title}</h4>
                <ul >
                {item.description.map((desc,index)=>(
                  <li className="content" key={desc.id}>
                     <MDBIcon icon="angle-double-right" size="lg"/>
                    {desc.description}
                  </li>
                ))}
                </ul>
              </div>
              </div>
))}

            </div>
            </div>
            </div>
       )

    }

export default HomeContent
