import React from "react"
import { StaticQuery, graphql } from "gatsby"
import board1 from "../images/boardMembers/boardheidi2.jpg"
import board2 from "../images/boardMembers/President_boarstara.jpg"
import board3 from "../images/boardMembers/boardsue.jpg"
const ComponentName = () => (
  <StaticQuery
    // query={graphql`
    //   {
    //     allStrapiBoardmembers {
    //       edges {
    //         node {
    //           id
    //           name
    //         }
    //       }
    //     }
    //   }
    // `}
    // render={data=><div class="wrapper">
    // {data.allStrapiBoardmembers.edges.map((document,index) => (
    //   <div class="card">
    //      <img src={index==0?board1:(index==1?board2:board3)}/>
    //       <div class="info">
    //       <div>
    //         <p>{document.node.name}</p>
    //         <button>Read More</button>
    //         </div>
    //     </div>
    //   </div>
    // ))}
    // </div>}
  ></StaticQuery>
)



export default ComponentName
