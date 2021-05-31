
import React from "react";
import "./board.css";
import member1 from "../images/boardMembers/President_boarstara.jpg";
import member2 from "../images/boardMembers/boardheidi2.jpg";
import {
  MDBBtn,
  MDBIcon,
} from 'mdbreact'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
{
  allStrapiEvents {
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


const HomeContent = () => {
  const data = useStaticQuery(query);
  const {allStrapiEvents:{nodes:events},}=data;
        return (


          <div className="box center">
            <div className="container">
              <div className="row ">
              {events.map((item,index) => (
                <div className="col-md-6" key={item.id}>
                <div className="homeContent">
                <h4>{item.title}</h4>
                <ul >
                {item.description.map((desc,index)=>(
                  <li className="content" key={desc.id}>
                     <MDBIcon icon="angle-double-right" size="lg"/>
                    {desc.description}
                  </li>
                ))}
                {/* <MDBBtn type="button" className="read-more">read more</MDBBtn> */}
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
